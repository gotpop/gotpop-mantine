import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
    skeleton: {
        display: "flex",
        height: "100%",
        minHeight: 300
    },
    paper: {
        display: "flex",
        // gap: "1rem",
        justifyContent: "space-between",
        alignItems: "start",
        height: "100%",
        flex: "1",
        flexWrap: "wrap",
    },
    content: {
        flex: "1 1 60%",
    },
    image: {
        flex: "0 1 30%",
    },
}))
