import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        marginBottom: 0
    },
    mainSection: {
        paddingBottom: theme.spacing.sm
    },
    user: {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: "background-color 100ms ease",
        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
        },
        [theme.fn.smallerThan("xs")]: {
            display: "none"
        }
    },
    burger: {
        [theme.fn.largerThan("xs")]: {
            display: "none"
        }
    },
    userActive: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
    },
    link: {
        textDecoration: "none"
    },
    tabs: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },
    tabsList: {
        borderBottom: "0 !important"
    },
    tab: {
        fontWeight: 500,
        height: 38,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
        },
        "&[data-active]": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            borderColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
        }
    }
}))