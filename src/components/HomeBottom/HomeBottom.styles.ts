import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
    centred: {
        zIndex: 2,
        maxWidth: 400,
        flexDirection: "column"
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
        margin: "auto",
    },
}))