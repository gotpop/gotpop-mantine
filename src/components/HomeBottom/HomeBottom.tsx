import { BackgroundImage, Center, Overlay, Text, Title } from "@mantine/core"
import { imgPaths } from "@/utils/imgPaths"
import { useStyles } from "./HomeBottom.styles"

interface FeatureImage {
  image: string
  title: React.ReactNode
  description: React.ReactNode
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode
  description: React.ReactNode
  data: FeatureImage[]
}

export function FeaturesImages() {
  // const { supTitle, description, data }: FeaturesImagesProps = mockData
  const { classes } = useStyles()
  const img = imgPaths.img3

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
          <Title order={3} size="xl" color="#fff">
            Features
          </Title>
          <Text color="#fff">
            BackgroundImage component can be used to add any content on image. It is useful for hero headers
            and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </>
  )
}
