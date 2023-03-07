import { MantineTheme, createStyles, keyframes } from "@mantine/core"

export const bounce = keyframes({
    '0%': { transform: 'translate3d(10rem, 0, 0)' },
    '100%': { transform: 'translate3d(0, , 0)' },
});

export const useStyles = createStyles((theme: MantineTheme) => ({
    root: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        zIndex: 1000,
        bottom: '2rem',
        right: '2rem',
        animation: `${bounce} .3s ease-in-out forwards`,
    },
    note: {
        position: 'relative',
    }
}))