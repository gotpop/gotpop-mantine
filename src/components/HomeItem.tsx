import { Button } from "@mantine/core"
import { Icon123 } from "@tabler/icons-react"

export default function HomeItem() {
  return (
    <>
      <div>Home</div>
      <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Indigo cyan
      </Button>
      <Icon123 />
    </>
  )
}
