import Layout from "@/components/Layout"
import { Title } from "@mantine/core"
import { GetStaticPaths } from "next"
import { usersData } from "../api/users"

type Props = {
  userData: usersData
}

function usersPage({ userData }: Props) {
  const { name, email } = userData
  return (
    <Layout>
      <Title>
        <>User: {userData.name}</>
      </Title>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const URL = "http://localhost:3000/api/users"

  const data = await fetch(URL)
  const { userData } = await data.json()

  const paths = userData.map((post: usersData) => ({ params: { id: post.id } }))

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const { id } = params
  const URL = `http://localhost:3000/api/user/${id}`

  const data = await fetch(URL)
  const userData = await data.json()

  return {
    props: {
      userData,
    },
  }
}

export default usersPage
