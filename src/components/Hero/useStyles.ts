import { MantineTheme } from '@mantine/core';
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme: MantineTheme, img: string) => ({
    hero: {
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "100vh"
    },
    container: {
        height: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingBottom: theme.spacing.xl * 10,
        zIndex: 1,
        position: "relative",

        [theme.fn.smallerThan("sm")]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3
        }
    },
    title: {
        color: theme.white,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

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

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
            fontSize: theme.fontSizes.sm
        }
    },
    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan("sm")]: {
            width: "100%"
        }
    }
}))