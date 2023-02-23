import Layout from "@/components/Layout"
import useSWR from "swr"
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from "@mantine/core"
import { ArticlesDataType } from "./api/articles"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Articles() {
  const { data, isLoading, error } = useSWR("/api/articles", fetcher)

  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 150ms ease, box-shadow 150ms ease",

      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: theme.shadows.md,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
  }))

  const { classes } = useStyles()

  const cards = data?.articlesdata?.map((article: ArticlesDataType) => (
    <Card href={`/article/${article.id}`} key={article.title} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image alt={"img"} src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ))

  return (
    <Layout>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {isLoading ? <h1>Loading...</h1> : cards}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
