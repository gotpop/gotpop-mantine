import { Inter } from "@next/font/google"
import { Layout } from "@/components/Layout"
import { HeroContentLeft } from "@/components/Hero"
import { FeaturesCards } from "@/components/Features"
import { FeaturesImages } from "@/components/FeaturesImages"

const inter = Inter({ subsets: ["latin"] })

const dataMock = {
  supTitle: "Use cases",
  description:
    "Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales. Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow.",
  data: [
    {
      image: "auditors",
      title: "Pharmacists",
      description: "Azurill can be seen bouncing and playing on its big, rubbery tail"
    },
    {
      image: "lawyers",
      title: "Lawyers",
      description: "Fans obsess over the particular length and angle of its arms"
    },
    {
      image: "accountants",
      title: "Bank owners",
      description: "They divvy up their prey evenly among the members of their pack"
    },
    {
      image: "others",
      title: "Others",
      description: "Phanpy uses its long nose to shower itself"
    }
  ]
}

export default function Home() {
  return (
    <Layout>
      <HeroContentLeft></HeroContentLeft>
      <FeaturesCards></FeaturesCards>
      <FeaturesImages {...dataMock}></FeaturesImages>
    </Layout>
  )
}
