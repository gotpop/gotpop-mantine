import { Header } from "@mantine/core"
import { Logo } from "./Logo"

export default function HeaderItem() {
  return (
    <Header height={60} p="md">
      <Logo />
    </Header>
  )
}
