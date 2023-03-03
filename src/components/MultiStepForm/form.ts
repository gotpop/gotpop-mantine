export const formConfig = (values, active) => ({
    initialValues: {
        missionType: '',
        contacts: [
            {
                key: '1',
                active: false
            },
            {
                key: '2',
                active: false
            },
            {
                key: '3',
                active: false
            },
            {
                key: '4',
                active: false
            },
            {
                key: '5',
                active: false
            },
            {
                key: '6',
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

    validate: (values) => {
        if (active === 0) {
            return {
                username: values.username.trim().length < 6 ? "Username must include at least 6 characters" : null,
                password: values.password.length < 6 ? "Password must include at least 6 characters" : null
            }
        }

        // if (active === 2) {
        //   return {
        //     name: values.name.trim().length < 2 ? "Name must include at least 2 characters" : null,
        //     email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email"
        //   }
        // }

        return {}
    }
}

)