export type FormValues = {
    missionType: string
    contacts: {
        key: string
        active: boolean
    }[]
    nft: {
        logo: string
        tagline: string
        background: string
    }
    finalWish: string
}

export const formInit = {
    missionType: "",
    contacts: [
        {
            key: "1",
            active: false
        },
        {
            key: "2",
            active: false
        },
        {
            key: "3",
            active: false
        },
        {
            key: "4",
            active: false
        },
        {
            key: "5",
            active: false
        },
        {
            key: "6",
            active: false
        }
    ],
    nft: {
        logo: "",
        tagline: "",
        background: ""
    },
    finalWish: ""
}

