import { Center, Footer, Text } from "@mantine/core"

export function FooterItem() {
  return (
    <Footer p="xs" height={"10"}>
      <Center>
        <Text size={"xs"}>
          <>Copyright {new Date().getFullYear()}</>
        </Text>
      </Center>
    </Footer>
  )
}
