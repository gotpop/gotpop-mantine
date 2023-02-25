import { Text, Title } from "@mantine/core"

import { ArticleItem } from "@/components/Article"
import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"
import { fetcher } from "@/utils/fetcher"

import useSWR from "swr"

export default function Article() {
  const { query } = useRouter()
  const { id } = query
  const { data: articleData, isLoading, error } = useSWR(`/api/article/${id}`, fetcher)

  const article = <ArticleItem articleData={articleData} />
  const loading = <Title order={1}>Loading...</Title>

  return <Layout>{articleData ? article : isLoading ? loading : null}</Layout>
}
