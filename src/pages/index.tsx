import { Layout } from "@/components/Layout"
import { HeroContentLeft } from "@/components/Hero"
import { FeaturesCards } from "@/components/Features"
import { FeaturesImages } from "@/components/FeaturesImages"

export default function Home() {
  return (
    <Layout>
      <HeroContentLeft></HeroContentLeft>
      <FeaturesCards></FeaturesCards>
      <FeaturesImages></FeaturesImages>
    </Layout>
  )
}
