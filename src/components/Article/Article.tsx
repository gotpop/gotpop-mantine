import { AspectRatio, Card, Image, Text } from "@mantine/core"

import { ArticlesDataType } from "@/pages/api/articles"
import { useStyles } from "./useStyles"
import { NextLink } from "@mantine/next"
import { ReactElement } from "react"
import { ConditionalWrapper } from "../ConditionalWrapper"

type Props = {
  articleData: ArticlesDataType
  wrapperCondition?: boolean
}

export default function ArticleItem({ articleData, wrapperCondition }: Props) {
  const { classes } = useStyles()

  return (
    <ConditionalWrapper
      condition={wrapperCondition}
      wrapper={(children) => (
        <NextLink href={`/article/${articleData.id}`} legacyBehavior>
          {children}
        </NextLink>
      )}
    >
      <Card key={articleData.title} p="md" radius="md" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image alt={"img"} src={articleData.image} />
        </AspectRatio>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
          {articleData.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {articleData.title}
        </Text>
      </Card>
    </ConditionalWrapper>
  )
}
