import Layout from "@/components/Layout"
import UsersStack from "@/components/UsersStack"
import { GetStaticProps } from "next"
import { usersData } from "./api/users"

type UsersProps = {
  userData: usersData[]
}

export default function users({ userData }: UsersProps) {
  return (
    <Layout>
      <h1>Users</h1>
      <UsersStack userData={userData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const URL = "http://localhost:3000/api/users"
  const data = await fetch(URL)
  const { userData } = await data.json()

  return {
    props: {
      userData,
    },
  }
}
