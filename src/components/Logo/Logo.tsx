import Link from "next/link"

import { Title } from "@mantine/core"
import { SpaceXIcon } from "@/icons/SpaceXIcon"
import { useStyles } from "./useStyles"

export function Logo() {
  const { classes } = useStyles()

  return (
    <Link href="/" className={classes.link}>
      <Title order={3} className={classes.logo}>
        <SpaceXIcon />
      </Title>
    </Link>
  )
}
