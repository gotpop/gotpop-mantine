import { MantineTheme, createStyles } from "@mantine/core"

const styles = (theme: MantineTheme) => ({
    link: {
        textDecoration: "none",
        color: theme.colors.dark[5],
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