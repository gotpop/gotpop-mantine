import { SimpleGrid } from "@mantine/core"

import { YourContacts } from "./YourContacts"
import { YourHeadstone } from "./YourHeadstone"
import { YourMission } from "./YourMission"
import { YourWishes } from "./YourWishes"

export function DashBoardWidgets() {
  return (
    <>
      <SimpleGrid
        cols={4}
        w="100%"
        spacing="lg"
        breakpoints={[
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 }
        ]}
      >
        <YourContacts />
        <YourMission />
        <YourHeadstone />
        <YourWishes />
      </SimpleGrid>
    </>
  )
}
