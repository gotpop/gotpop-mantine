export const formConfig = {
    initialValues: {
        username: "",
        password: "",
        name: "",
        email: "",
        website: "",
        github: "",
        radio: "vue"
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

