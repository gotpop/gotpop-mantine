import { imgPaths } from "@/utils/imgPaths"
import { Accordion, Col, Container, Grid, Title } from "@mantine/core"
import { placeholder } from "./data"
import { useStyles } from "./useStyles"

export function FaqsBlock() {
  const img = imgPaths.img2
  const { classes } = useStyles(img)

  return (
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
  )
}
