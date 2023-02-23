import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { Button, Container } from "@mantine/core"
import Layout from "@/components/Layout"
import { useToggle, useEventListener } from "@mantine/hooks"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [value, toggle] = useToggle([true, false])

  const thing = () => {
    console.log("click")
  }

  const ref = useEventListener("click", thing)
  return (
    <>
      <Layout>
        <Container size="xl">
          <Button type="button" onClick={() => toggle()}>
            Click me!
          </Button>
          {!value && <h1>Test</h1>}
        </Container>
      </Layout>
    </>
  )
}
