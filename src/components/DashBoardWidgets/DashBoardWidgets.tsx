import { Grid, Skeleton } from "@mantine/core"
import { Mission } from "@prisma/client"

import { YourContacts } from "./YourContacts"
import { YourHeadstone } from "./YourHeadstone"
import { YourMission } from "./YourMission"
import { YourWishes } from "./YourWishes"

type Props = { missionData: Mission; isLoading: boolean }

export function DashBoardWidgets({ missionData, isLoading }: Props) {
  const { missionType, contacts, nft, finalWish } = missionData

  return (
    <Grid>
      <Grid.Col md={6} lg={7}>
        <Skeleton visible={isLoading} style={{ display: "flex", height: "100%", minHeight: 300 }}>
          <YourMission missionType={missionType} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={5}>
        <Skeleton visible={isLoading} style={{ display: "flex", height: "100%" }}>
          <YourContacts contacts={contacts} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={5}>
        <Skeleton visible={isLoading} style={{ display: "flex", height: "100%" }}>
          <YourHeadstone nft={nft} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={7}>
        <Skeleton visible={isLoading} style={{ display: "flex", height: "100%" }}>
          <YourWishes finalWish={finalWish} />
        </Skeleton>
      </Grid.Col>
    </Grid>
  )
}
