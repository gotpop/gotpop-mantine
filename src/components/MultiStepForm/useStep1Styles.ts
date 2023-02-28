import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme, img) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.radius.md,
        overflow: "hidden",
        boxShadow: theme.shadows.sm,
        // marginTop: theme.spacing.xl,

    },
    label: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.colors.gray[0],
        minHeight: '100%',
        cursor: "pointer",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center right",
        backgroundSize: "cover",
        padding: theme.spacing.md,
        justifyContent: "space-between",
    },
    radio: {
        border: 'none',
        backgroundColor: 'transparent',
    },
    body: {
        position: 'relative'
    },
    box: {
        zIndex: 1
    },
    inner: {
        position: "absolute",
        right: '0',
        margin: theme.spacing.md,
        zIndex: 1,
    },
    labelWrapper: {
        display: "flex",
        width: '100%',
        minHeight: 400,
    }
}))