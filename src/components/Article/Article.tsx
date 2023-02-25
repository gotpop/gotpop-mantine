import { AspectRatio, Card, Image, Text } from "@mantine/core"

import { ArticlesDataType } from "@/pages/api/articles"
import { useStyles } from "./useStyles"
import { NextLink } from "@mantine/next"
import { ConditionalWrapper } from "@/components/ConditionalWrapper"

type Props = {
  articleData: ArticlesDataType
  wrapperCondition?: boolean
}

export function ArticleItem({ articleData, wrapperCondition }: Props) {
  const { classes } = useStyles()
  const { title, image, date, id } = articleData

  return (
    <ConditionalWrapper
      condition={wrapperCondition}
      wrapper={(children) => (
        <NextLink href={`/article/${id}`} legacyBehavior>
          {children}
        </NextLink>
      )}
    >
      <Card key={title} p="md" radius="md" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image alt={"img"} src={image} />
        </AspectRatio>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
          {date}
        </Text>
        <Text className={classes.title} mt={5}>
          {title}
        </Text>
      </Card>
    </ConditionalWrapper>
  )
}
