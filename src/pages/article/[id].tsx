import { Text, Title } from "@mantine/core"

import ArticleItem from "@/components/Article"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Article() {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useSWR(`/api/article/${id}`, fetcher)

  return (
    <>
      <Layout>
        <>
          {data?.articleData && <Title mb={40}>{data?.articleData.title}</Title>}
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Error: {error}</Text>}
          {data?.articleData && <ArticleItem articleData={data.articleData} />}
        </>
      </Layout>
    </>
  )
}
