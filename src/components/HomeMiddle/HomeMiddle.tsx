import { imgPaths } from "@/utils/imgPaths"
import { useStyles } from "./HomeMiddle.styles"
import { BackgroundImage, Center, Overlay, Text, Title } from "@mantine/core"
import { ButtonTheme } from "../ButtonTheme"

export function FeaturesCards() {
  const { classes, theme } = useStyles()
  const img = imgPaths.img5

  return (
    <>
      <BackgroundImage
        src={img}
        radius="xs"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Center p="md" style={{ zIndex: "2", maxWidth: 400, flexDirection: "column" }}>
          <Title order={3} size="xl" color="#fff" className={classes.title}>
            Features
          </Title>
          <Text color="#fff" className={classes.text}>
            BackgroundImage component can be used to add any content on image. It is useful for hero headers
            and other similar sections
          </Text>
          <ButtonTheme radius={0} href="/login">
            Join us
          </ButtonTheme>
        </Center>
      </BackgroundImage>
    </>
  )
}
