import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
    paper: {
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        height: "100%",
        flex: "1"
    },
    skeleton: {
        display: "flex",
        height: "100%",
        minHeight: 300
    }
}))
