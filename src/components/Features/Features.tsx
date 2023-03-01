import { Badge, Group, Title, Text, Card, SimpleGrid, Container } from "@mantine/core"
import { mockdata } from "./data"
import { useStyles } from "./useStyles"

export function FeaturesCards() {
  const { classes, theme } = useStyles()

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="lg" px="xl" py="xl">
      <Group position="center" mt="20">
        <Badge variant="filled" size="lg">
          Recruting Now
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Strike into the unknown
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives
        it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  )
}
