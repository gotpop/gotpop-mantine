import Layout from "@/components/Layout"
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Title } from "@mantine/core"
import { useRouter } from "next/router"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Article() {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, error } = useSWR(`/api/article/${id}`, fetcher)
  console.log("data :", data)

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

  const card = () => (
    <Card key={data?.articleData?.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={data?.articleData?.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {data?.articleData?.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {data?.articleData?.title}
      </Text>
    </Card>
  )

  return (
    <>
      <Layout>
        <>
          <Title>Article page</Title>
          {data?.articleData ? card() : <Text>Loading...</Text>}
        </>
      </Layout>
    </>
  )
}
