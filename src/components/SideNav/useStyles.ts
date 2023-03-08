import { createStyles } from "@mantine/core"

export const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => {
    // const icon: string = getRef("icon")

    return {
        navbar: {
            position: "sticky",
            top: 0,
            width: params?.collapsed ? 81 : 264,
            transition: params?.collapsed ? "width 0.1s linear" : "none"
        },
        header: {
            paddingBottom: theme.spacing.xs,
            marginBottom: theme.spacing.md,
            borderBottom: `1px solid ${theme.colors.gray[2]}`
        },
        footer: {
            paddingTop: theme.spacing.xs,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colors.gray[2]}`
        },
        logo: {
            ...theme.fn.focusStyles(),
            width: "100%",
            display: "flex",
            alignItems: "center",
            columnGap: theme.spacing.sm,
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 700
        },
        link: {
            ...theme.fn.focusStyles(),
            width: "100%",
            display: "flex",
            alignItems: "center",
            columnGap: theme.spacing.sm,
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colors.gray[7],
            // padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
            padding: '1rem 1.2rem',
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            "&:hover": {
                backgroundColor: theme.colors.gray[0],
                color: theme.black,

                // [`& .${icon}`]: {
                //     color: theme.black
                // }
            }
        },
        linkActive: {
            "&, &:hover": {
                backgroundColor: theme.colors[theme.primaryColor][0],
                color: theme.colors[theme.primaryColor][7],
                // [`& .${icon}`]: {
                //     color: theme.colors[theme.primaryColor][7]
                // }
            }
        },
        // linkIcon: {
        //     ref: icon,
        //     color: theme.colors.gray[6]
        // },
        linkLabel: params?.collapsed ? { display: "none" } : {}
    }
})