import { MantineTheme, createStyles } from "@mantine/core"

export const useStyles = createStyles((theme: MantineTheme) => ({
    radioGroup: {
        width: "100%"
    },
    button: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        transition: "background-color 150ms ease, border-color 150ms ease",
        minHeight: 400,
        backgroundImage:
            "url(https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        // border: `1px solid ${
        //   checked
        //     ? theme.fn.variant({ variant: "outline", color: theme.primaryColor }).border
        //     : theme.colorScheme === "dark"
        //     ? theme.colors.dark[8]
        //     : theme.colors.gray[3]
        // }`,
        borderRadius: theme.radius.sm,
        padding: theme.spacing.sm
        // backgroundColor: checked
        //   ? theme.fn.variant({ variant: "light", color: theme.primaryColor }).background
        //   : theme.colorScheme === "dark"
        //   ? theme.colors.dark[8]
        //   : theme.white
    },

    body: {
        flex: 1,
        marginLeft: theme.spacing.md
    }
}))