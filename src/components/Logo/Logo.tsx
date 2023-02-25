import { Title } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { Icon3dCubeSphere } from "@tabler/icons-react"
import { useStyles } from "./useStyles"

export function Logo() {
  const { classes } = useStyles()

  return (
    <NextLink href={"/"} legacyBehavior className={classes.link}>
      <Title order={3} className={classes.logo}>
        <Icon3dCubeSphere size={28} />
        <span className={classes.text}>Interview</span>
      </Title>
    </NextLink>
  )
}
