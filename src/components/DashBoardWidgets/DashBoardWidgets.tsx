import useSWR from "swr"
import { fetcher } from "@/utils/fetcher"

import { SimpleGrid, Skeleton } from "@mantine/core"
import { Mission } from "@prisma/client"

import { YourContacts } from "./YourContacts"
import { YourHeadstone } from "./YourHeadstone"
import { YourMission } from "./YourMission"
import { YourWishes } from "./YourWishes"

export function DashBoardWidgets() {
  const { data, error, isLoading } = useSWR<Mission>("/api/mission", fetcher)
  const { missionType, contacts, nft, finalWish } = { ...data } as Mission

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
          <YourMission missionType={missionType} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourContacts contacts={contacts} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourHeadstone nft={nft} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <YourWishes finalWish={finalWish} />
        </Skeleton>
      </SimpleGrid>
    </>
  )
}
