import { Grid, Skeleton } from "@mantine/core"
import { Mission } from "@prisma/client"
import { useStyles } from "./DashBoardWidgets.styles"

import { YourMission } from "./YourMission"
import { YourContacts } from "./YourContacts"
import { YourHeadstone } from "./YourHeadstone"
import { YourWishes } from "./YourWishes"

type Props = { missionData: Mission; isLoading: boolean }

export function DashBoardWidgets({ missionData, isLoading }: Props) {
  const { missionType, contacts, nft, finalWish } = missionData
  const { classes } = useStyles()

  return (
    <Grid>
      <Grid.Col md={6} lg={7}>
        <Skeleton visible={isLoading} className={classes.skeleton}>
          <YourMission missionType={missionType} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={5}>
        <Skeleton visible={isLoading} className={classes.skeleton}>
          <YourContacts contacts={contacts} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={5}>
        <Skeleton visible={isLoading} className={classes.skeleton}>
          <YourHeadstone nft={nft} />
        </Skeleton>
      </Grid.Col>
      <Grid.Col md={6} lg={7}>
        <Skeleton visible={isLoading} className={classes.skeleton}>
          <YourWishes finalWish={finalWish} />
        </Skeleton>
      </Grid.Col>
    </Grid>
  )
}
