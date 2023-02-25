import { MantineTheme, createStyles } from "@mantine/core"

const styles = (theme: MantineTheme) => ({
    navLink: {
        textDecoration: "none",
    },
    root: {
        padding: "5rem",
    },
})

export const useStyles = createStyles(styles)