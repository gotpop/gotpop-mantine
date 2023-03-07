import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        zIndex: 1000,
        bottom: '2rem',
        right: '2rem',
    },
}))