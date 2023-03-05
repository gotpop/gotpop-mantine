import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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

        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.md,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
}))