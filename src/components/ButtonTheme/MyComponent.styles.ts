import { createStyles, MantineNumberSize } from '@mantine/core';

export interface MyComponentStylesParams {
    radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: MyComponentStylesParams) => ({
    root: {
        borderRadius: theme.fn.radius(radius),
        border: '2px solid white',
        paddingLeft: theme.spacing.xl * 2,
        paddingRight: theme.spacing.xl * 2,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
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