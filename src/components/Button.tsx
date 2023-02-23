import { Button } from "@mantine/core"
import { useToggle } from "@mantine/hooks"

export default function ButtonItem() {
  const [value, toggle] = useToggle()

  return (
    <>
      <Button data-testid="liam" type="button" onClick={() => toggle()}>
        Click me!
      </Button>
      {value && <h1>Test</h1>}
    </>
  )
}
