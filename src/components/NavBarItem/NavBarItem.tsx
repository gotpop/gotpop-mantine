import { Navbar, Group, Code, ScrollArea } from "@mantine/core"
import {
  IconNotes,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments
} from "@tabler/icons-react"

import { LinksGroup } from "../LinksGroup"
import { useStyles } from "./useStyles"

const mockdata = [
  { label: "Mission Control", icon: IconGauge, link: "/mission-control" },
  {
    label: "Profile",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Onboarding", link: "/mission-control/onboarding" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" }
    ]
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments }
]

export function NavBarItem() {
  const { classes } = useStyles()
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar} fixed={false}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          {/* <Logo width={120} /> */}
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </Navbar>
  )
}
