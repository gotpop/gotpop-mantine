export const formConfig = {
    initialValues: {
        missionType: "vue",
        contacts: [
            {
                id: "1",
                active: false
            },
            {
                id: "2",
                active: false
            },
            {
                id: "3",
                active: false
            },
            {
                id: "4",
                active: false
            },
            {
                id: "5",
                active: false
            },
            {
                id: "6",
                active: false
            }
        ],
        nft: {
            logo: '',
            tagline: '',
            background: ''
        },
        finalWish: ''
    },

    // validate: (values) => {
    //     if (active === 1) {
    //       return {
    //         username: values.username.trim().length < 6 ? "Username must include at least 6 characters" : null,
    //         password: values.password.length < 6 ? "Password must include at least 6 characters" : null
    //       }
    //     }

    //     if (active === 2) {
    //       return {
    //         name: values.name.trim().length < 2 ? "Name must include at least 2 characters" : null,
    //         email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email"
    //       }
    //     }

    //     return {}
    // }
}

