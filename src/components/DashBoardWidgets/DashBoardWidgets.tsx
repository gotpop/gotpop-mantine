import { SimpleGrid, Skeleton } from "@mantine/core"
import { Mission } from "@prisma/client"

import { YourContacts } from "./YourContacts"
import { YourHeadstone } from "./YourHeadstone"
import { YourMission } from "./YourMission"
import { YourWishes } from "./YourWishes"

type Props = {
  missionItem: Mission | undefined
  isLoading: boolean
}

export function DashBoardWidgets({ missionItem, isLoading }: Props) {
  // const { missionType, contacts, nft, finalWish } = missionItem

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
        <Skeleton visible={isLoading}>
          <YourMission missionType={missionItem?.missionType} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourContacts contacts={missionItem?.contacts} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourHeadstone nft={missionItem?.nft} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourWishes finalWish={missionItem?.finalWish} />
        </Skeleton>
        {/* {missionItem && (
          <>
           
          </>
        )} */}
      </SimpleGrid>
    </>
  )
}
