import { Layout } from "@/components/Layout"
import { createStyles, Accordion, Grid, Col, Container, Title, MantineTheme } from "@mantine/core"
import { imgPaths } from "@/utils/imgPaths"

const useStyles = createStyles((theme: MantineTheme, img) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundImage: `url(${img})`,
    backgroundPosition: "center right",
    backgroundSize: "cover",
    minHeight: 800
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7]
  }
}))

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon."

export default function Faqs() {
  const img = imgPaths.img2 as any
  const { classes } = useStyles(img)

  return (
    <Layout>
      <Title order={1}>Frequently Asked Questions</Title>

      <div className={classes.wrapper}>
        <Container size="lg">
          <Grid gutter={50}>
            <Col span={12} md={6}>
              <Title order={2} align="left" className={classes.title}>
                Frequently Asked Questions
              </Title>

              <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>Is it dangerous?</Accordion.Control>
                  <Accordion.Panel>
                    Yes. Even if we were trying to kill you it wouldn&apos;t be and more dangerous
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                  <Accordion.Control>Can I create more that one account?</Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                  <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col span={12} md={6}>
              {/* <Image src={image.src} alt="Frequently Asked Questions" /> */}
            </Col>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}
