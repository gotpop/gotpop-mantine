import { imgPaths } from "@/utils/imgPaths"
import { Overlay, Text, Title } from "@mantine/core"
import { ButtonTheme } from "../ButtonTheme"
import { useStyles } from "./HomeMiddle.styles"

export function HomeMiddle() {
  const img = imgPaths.img5
  const { classes } = useStyles(img)

  return (
    <div className={classes.background}>
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Make Humanity Multi Planetary
        </Title>
        <Text className={classes.description}>Join us in our mission to make humanity multi planetary.</Text>
        <ButtonTheme radius={0} href="/login">
          Join us
        </ButtonTheme>
      </div>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
    </div>
  )
}
