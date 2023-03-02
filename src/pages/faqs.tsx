import { FaqsBlock } from "@/components/FaqsBlock"
import { Layout } from "@/components/Layout"
import { imgPaths } from "@/utils/imgPaths"
import { Accordion, Col, Container, createStyles, Grid, MantineTheme, Title } from "@mantine/core"

export default function Faqs() {
  return (
    <Layout>
      <Title order={1}>Frequently Asked Questions</Title>
      <FaqsBlock />
    </Layout>
  )
}
