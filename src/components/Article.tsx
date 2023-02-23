import { AspectRatio, Card, Image, Text, createStyles } from "@mantine/core"

import { ArticlesDataType } from "@/pages/api/articles"

type Props = {
  articleData: ArticlesDataType
}

export default function ArticleItem({ articleData }: Props) {
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
  return (
    <>
      <Card p="md" radius="md" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image alt={"img"} src={articleData.image} />
        </AspectRatio>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
          {articleData?.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {articleData?.title}
        </Text>
      </Card>
    </>
  )
}
