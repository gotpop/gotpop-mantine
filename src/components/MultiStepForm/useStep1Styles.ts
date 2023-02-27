import { MantineTheme, createStyles } from "@mantine/core"
import { relative } from "path"

export const useStyles = createStyles((theme: MantineTheme, img) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.radius.lg,
        overflow: "hidden",
        dropShadow: theme.shadows.lg,

    },
    label: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.colors.gray[0],
        minHeight: '100%',
        cursor: "pointer",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
    },
    radio: {
        position: 'relative'
    },
    body: {
        position: 'relative'
    },
    inner: {
        position: "absolute",
        right: '0',
        margin: theme.spacing.md,
    },
    labelWrapper: {
        display: "flex",
        backgroundColor: 'green',
        width: '100%',
        minHeight: 400,
    }
}))