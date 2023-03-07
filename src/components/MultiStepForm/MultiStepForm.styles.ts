import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        marginBottom: theme.spacing.xl * 4
    },
    steps: {
        marginBottom: theme.spacing.xl,
    }
}))