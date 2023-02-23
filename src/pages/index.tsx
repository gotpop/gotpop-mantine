import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { Button, Container } from "@mantine/core"
import Layout from "@/components/Layout"
import { useToggle, useEventListener } from "@mantine/hooks"
import ButtonItem from "@/components/Button"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Layout>
        <Container size="xl">
          <ButtonItem />
        </Container>
      </Layout>
    </>
  )
}
