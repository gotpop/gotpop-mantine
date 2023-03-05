import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
    title: {
        fontSize: 60,
        fontWeight: 900,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 24
        }
    },
    text: {
        maxWidth: 600,
        margin: "auto",
    },
}))
