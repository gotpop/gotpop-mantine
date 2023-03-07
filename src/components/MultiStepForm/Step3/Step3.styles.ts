import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    text: {
        maxWidth: 600,
        color: theme.colors.gray[7],
    }
}))