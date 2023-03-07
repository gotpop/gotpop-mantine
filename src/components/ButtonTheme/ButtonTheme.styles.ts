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
        paddingBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.xxl,
        paddingRight: theme.spacing.xxl,
        paddingTop: theme.spacing.sm,
        textDecoration: 'none',
        textTransform: 'uppercase',

        "&:hover": {
            backgroundColor: "white",
            color: 'black'
        }
    },
    text: {
        fontFamily: theme.headings.fontFamily,
        fontSize: theme.fontSizes.xl,
    },
}))