import useSWR from "swr"

import { Layout } from "@/components/Layout"
import { SimpleGrid, Container, Title } from "@mantine/core"
import { ArticlesDataType } from "./api/articles"
import { ArticleItem } from "@/components/Article/Article"
import { fetcher } from "@/utils/fetcher"

export default function Articles() {
  const { data: articlesData, isLoading, error } = useSWR("/api/articles", fetcher)

  const articles = articlesData?.map((articleData: ArticlesDataType) => (
    <ArticleItem key={articleData.id} articleData={articleData} wrapperCondition />
  ))

  return (
    <Layout>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {error && <Title order={1}>Error</Title>}
          {isLoading ? <Title order={1}>Loading...</Title> : articles}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
