import { MantineTheme, createStyles } from "@mantine/core"

const styles = (theme: MantineTheme) => ({
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
})

export const useStyles = createStyles(styles)