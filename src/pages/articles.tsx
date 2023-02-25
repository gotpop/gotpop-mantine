import Layout from "@/components/Layout"
import useSWR from "swr"
import { SimpleGrid, Container } from "@mantine/core"
import { ArticlesDataType } from "./api/articles"
import ArticleItem from "@/components/Article/Article"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Articles() {
  const { data: articlesData, isLoading, error } = useSWR("/api/articles", fetcher)

  const articles = articlesData?.map((articleData: ArticlesDataType) => (
    <ArticleItem key={articleData.id} articleData={articleData} wrapperCondition />
  ))

  return (
    <Layout>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {error && <h1>Error</h1>}
          {isLoading ? <h1>Loading...</h1> : articles}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
