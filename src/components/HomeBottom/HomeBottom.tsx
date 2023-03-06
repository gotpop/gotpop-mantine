import { imgPaths } from "@/utils/imgPaths"
import { Overlay, Text, Title } from "@mantine/core"
import { ButtonTheme } from "../ButtonTheme"
import { useStyles } from "./HomeBottom.styles"

export function HomeBottom() {
  const img = imgPaths.img3
  const { classes } = useStyles(img)

  return (
    <div className={classes.background}>
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Mission to Mars
        </Title>
        <Text className={classes.description}>
          Join SpaceX and NASA on a mission to Mars. We are looking for the best and brightest to join us in
          building the future of space exploration.
        </Text>
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

// <BackgroundImage
//   src={img}
//   radius="xs"
//   style={{
//     minHeight: "100vh",
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "start"
//   }}
// >
//   <Overlay
//     gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
//     opacity={1}
//     zIndex={0}
//   />
//   <Grid className={classes.centred}>
//     <Grid.Col span={4} offset={2}>
//       <Box p="md">
//         <Title order={3} size="xl" color="#fff" className={classes.title}>
//           Are you ready?
//         </Title>
//         <Text color="#fff" className={classes.text}>
//           Join us in our mission to make humanity multi planetary.
//         </Text>
//         <ButtonTheme radius={0} href="/login">
//           Join us
//         </ButtonTheme>
//       </Box>
//     </Grid.Col>
//   </Grid>
// </BackgroundImage>
