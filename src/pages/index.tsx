import { Inter } from "@next/font/google"
import { Container } from "@mantine/core"
import { Layout } from "@/components/Layout"
import ButtonItem from "@/components/Button"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <Container size="xl">
        <ButtonItem />
      </Container>
    </Layout>
  )
}
