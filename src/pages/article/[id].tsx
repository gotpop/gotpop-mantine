import { Text, Title } from "@mantine/core"

import { ArticleItem } from "@/components/Article"
import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"
import { fetcher } from "@/utils/fetcher"

import useSWR from "swr"

export default function Article() {
  const { query } = useRouter()
  const { id } = query
  const { data, isLoading, error } = useSWR(`/api/article/${id}`, fetcher)

  return (
    <Layout>
      <>
        {data?.articleData && <Title mb={40}>{data?.articleData.title}</Title>}
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {data?.articleData && <ArticleItem articleData={data.articleData} />}
      </>
    </Layout>
  )
}
