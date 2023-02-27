import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'red',

    },
    label: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'yellow',
        minHeight: '100%',
        cursor: "pointer",
    },
    radio: {
        position: "absolute"
    },
    body: {
        display: "flex"
    },
    inner: {
        display: "flex"
    },
    labelWrapper: {
        display: "flex",
        backgroundColor: 'green',
        width: '100%',
        minHeight: 400,
    }
}))