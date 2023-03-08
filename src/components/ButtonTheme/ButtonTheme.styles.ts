import { createStyles, MantineNumberSize } from '@mantine/core';

export interface MyComponentStylesParams {
    radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: MyComponentStylesParams) => ({
    root: {
        border: '2px solid white',
        borderRadius: theme.fn.radius(radius),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
        display: 'inline-flex',
        padding: "1rem 2rem",
        textDecoration: 'none',
        textTransform: 'uppercase',

        "&:hover": {
            backgroundColor: "white",
            color: 'black'
        }
    },
    text: {
        fontFamily: theme.headings.fontFamily,
        fontSize: '30px',
    },
}))