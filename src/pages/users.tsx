import { GetStaticProps } from "next"
import Layout from "@/components/Layout"
import UsersStack from "@/components/UsersStack"
import { usersData } from "./api/users"

type UsersProps = {
  userData: usersData[]
}

export default function users() {
  return (
    <Layout>
      <h1>Users</h1>
      {/* <UsersStack userData={userData} /> */}
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const dev = process.env.NODE_ENV !== 'production'
//   const local = 'http://localhost:3000/api/users'
//   const prod = 'https://gotpop-mantine.vercel.app/api/users'
  
//   const URL = dev ? local : prod

//   const data = await fetch(URL)
//   const { userData } = await data.json()

//   return {
//     props: {
//       userData,
//     },
//   }
// }
