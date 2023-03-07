import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        marginBottom: theme.spacing.xxl
    },
    steps: {
        marginBottom: theme.spacing.xl,
    }
}))