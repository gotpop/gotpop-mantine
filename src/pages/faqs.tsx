import { FaqsBlock } from "@/components/FaqsBlock"
import { Layout } from "@/components/Layout"
import { Title } from "@mantine/core"

export default function Faqs() {
  return (
    <Layout>
      <Title order={2}>Frequently Asked Questions</Title>
      <FaqsBlock />
    </Layout>
  )
}
