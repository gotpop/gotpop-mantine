import { Title } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { SpaceXIcon } from "../SocialButtons/SpaceXIcon"
import { useStyles } from "./useStyles"

export function Logo() {
  const { classes } = useStyles()

  return (
    <NextLink href={"/"} legacyBehavior className={classes.link}>
      <Title order={3} className={classes.logo}>
        <SpaceXIcon />
      </Title>
    </NextLink>
  )
}
