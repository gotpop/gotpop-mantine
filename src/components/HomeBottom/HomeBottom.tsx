import { BackgroundImage, Box, Center, Container, Grid, Overlay, Text, Title } from "@mantine/core"
import { imgPaths } from "@/utils/imgPaths"
import { useStyles } from "./HomeBottom.styles"
import { ButtonTheme } from "../ButtonTheme"

export function FeaturesImages() {
  const { classes } = useStyles()
  const img = imgPaths.img3

  return (
    <BackgroundImage
      src={img}
      radius="xs"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "start"
      }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Grid className={classes.centred}>
        <Grid.Col span={4} offset={2}>
          <Box p="md">
            <Title order={3} size="xl" color="#fff" className={classes.title}>
              Are you ready?
            </Title>
            <Text color="#fff" className={classes.text}>
              Join us in our mission to make humanity multi planetary.
            </Text>
            <ButtonTheme radius={0} href="/login">
              Join us
            </ButtonTheme>
          </Box>
        </Grid.Col>
      </Grid>
    </BackgroundImage>
  )
}
