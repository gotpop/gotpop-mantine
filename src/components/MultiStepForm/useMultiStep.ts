import { useForm } from "@mantine/form"
import { formInit } from "./form"

export function useMultiStep(active: number) {

    const form = useForm({
        initialValues: formInit,
        validate: (values) => {
            if (active === 0) {
                return {
                    missionType: values.missionType.trim().length < 1 ? "Pick a mission" : null
                }
            }
            if (active === 1) {
                const checkboxes = values.contacts.filter((contact) => contact.active === true)

                return {
                    contacts: checkboxes.length < 1 ? "Pick a contact" : null
                }
            }
            if (active === 2) {
                return {
                    nftLogo: values.nft.logo.trim().length < 1 ? "Pick a Logo" : null,
                    nftTagline: values.nft.tagline.trim().length < 1 ? "Pick a Tagline" : null,
                    nftBackground: values.nft.background.trim().length < 1 ? "Pick a Background" : null
                }
            }
            if (active === 3) {
                return {
                    finalWish: values.finalWish.trim().length < 1 ? "Pick a final wish" : null
                }
            }

            return {}
        }
    })

    return { form }
}