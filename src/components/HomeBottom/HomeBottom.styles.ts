import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
    centred: {
        zIndex: 2,
        width: "100%",
        flexDirection: "column",
        alignItems: "start",
        margin: theme.spacing.xl,
    },
    title: {
        fontSize: 60,
        fontWeight: 900,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 24
        }
    },
    text: {
        maxWidth: 600,
        fontSize: 20,
        marginBottom: theme.spacing.xl,
    },
}))