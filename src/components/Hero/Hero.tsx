import { imgPaths } from "@/utils/imgPaths"
import { Overlay, Container, Title, Button, Text } from "@mantine/core"
import { useStyles } from "./useStyles"

export function HeroContentLeft() {
  const img = imgPaths.img2
  const { classes } = useStyles(img)

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Mission to Mars</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Join SpaceX and NASA on a mission to Mars. We are looking for the best and brightest to join us in
          building the future of space exploration.
        </Text>

        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Join Us
        </Button>
      </Container>
    </div>
  )
}
