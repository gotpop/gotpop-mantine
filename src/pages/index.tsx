import { Layout } from "@/components/Layout"
import { Hero } from "@/components/Hero"
import { HomeMiddle } from "@/components/HomeMiddle"
import { HomeBottom } from "@/components/HomeBottom"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeMiddle />
      <HomeBottom />
    </Layout>
  )
}
