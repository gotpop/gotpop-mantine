import { MantineTheme } from '@mantine/core';
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme: MantineTheme, img: string) => ({
    background: {
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "100vh",
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "repeat(12, 1fr)",
        padding: "calc(60px + 2rem) 2rem 2rem 2rem",
    },
    content: {
        gridColumn: "2 / 6",
        zIndex: 1,
        position: "relative",
    },
    title: {
        color: theme.white,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.2,
        marginBottom: theme.spacing.xl,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 40,
            lineHeight: 1.2
        },

        [theme.fn.smallerThan("xs")]: {
            fontSize: 28,
            lineHeight: 1.3
        }
    },
    description: {
        color: theme.white,
        maxWidth: 600,
        fontSize: 25,
        marginBottom: theme.spacing.xxl,

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
            fontSize: theme.fontSizes.sm
        }
    },
}))