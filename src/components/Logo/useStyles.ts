import { MantineTheme, createStyles } from "@mantine/core"

const styles = (theme: MantineTheme) => ({
    link: {
        textDecoration: "none",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    text: {
        display: "flex",
        alignItems: "center",
    },
})

export const useStyles = createStyles(styles)