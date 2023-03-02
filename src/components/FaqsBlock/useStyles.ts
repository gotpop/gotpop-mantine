import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme, img: string) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundImage: `url(${img})`,
        backgroundPosition: "center right",
        backgroundSize: "cover",
        minHeight: 800
    },
    title: {
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`
    },
    item: {
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7]
    }
}))
