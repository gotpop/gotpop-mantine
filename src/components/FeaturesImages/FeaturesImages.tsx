import { Text, Container, Title, SimpleGrid } from "@mantine/core"
import { mockData } from "./mockData"
import { useStyles } from "./useStyles"

interface FeatureImage {
  image: string
  title: React.ReactNode
  description: React.ReactNode
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode
  description: React.ReactNode
  data: FeatureImage[]
}

export function FeaturesImages() {
  const { supTitle, description, data }: FeaturesImagesProps = mockData
  const { classes } = useStyles()

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ))

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>

      <Title className={classes.title} order={2}>
        PharmLand is <span className={classes.highlight}>not</span> just for pharmacists
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  )
}
