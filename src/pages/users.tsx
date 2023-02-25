import { GetStaticProps } from "next"
import { Layout } from "@/components/Layout"
import { UsersStack } from "@/components/UsersStack"
import { UsersData } from "./api/users"
import { Title } from "@mantine/core"

type Props = {
  userData: UsersData[]
}

export default function users({ userData }: Props) {
  return (
    <Layout>
      <Title order={1}>Users</Title>
      {/* <UsersStack userData={userData} /> */}
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const dev = process.env.NODE_ENV !== "production"
//   const local = "http://localhost:3000/api/users"
//   const prod = "https://gotpop-mantine.vercel.app/api/users"

//   const URL = dev ? local : prod

//   const data = await fetch(URL)
//   const userData = await data.json()

//   return {
//     props: {
//       userData
//     }
//   }
// }
