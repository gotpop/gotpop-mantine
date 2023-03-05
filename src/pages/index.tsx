import { Layout } from "@/components/Layout"
import { HeroContentLeft } from "@/components/Hero"
import { FeaturesCards } from "@/components/HomeMiddle"
import { FeaturesImages } from "@/components/HomeBottom"

export default function Home() {
  return (
    <Layout>
      <HeroContentLeft></HeroContentLeft>
      <FeaturesCards></FeaturesCards>
      <FeaturesImages></FeaturesImages>
    </Layout>
  )
}
