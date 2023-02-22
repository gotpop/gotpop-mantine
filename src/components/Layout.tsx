import { AppShell } from "@mantine/core"
import FooterItem from "./Footer"
import HeaderItem from "./Header"
import NavBarItem from "./NavBar"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppShell
        header={<HeaderItem />}
        navbar={<NavBarItem />}
        footer={<FooterItem />}
        styles={{
          main: {
            backgroundColor: "whitesmoke",
            minHeight: "100vh",
            minWidth: "100vw",
          },
        }}
      >
        {children}
      </AppShell>
    </>
  )
}
