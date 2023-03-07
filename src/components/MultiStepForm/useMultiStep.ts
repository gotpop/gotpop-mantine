import { useForm } from "@mantine/form"
import { formInit } from "./form"

import NotificationContext from "@/context/notificationContext"
import { SetStateAction, useContext, useEffect, useState } from "react"

export function useMultiStep() {
    const notificationCtx = useContext(NotificationContext)
    const [active, setActive] = useState<number>(0)

    const handleActive = (active: SetStateAction<number>) => setActive(active)
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    const nextStep = () => {
        handleActive((current) => {
            if (form.validate().hasErrors) {
                return current
            }
            return current < 4 ? current + 1 : current
        })

        notificationCtx.clear()
    }

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

    useEffect(() => {
        Object.keys(form.errors).map((key) => {
            notificationCtx.error(form.errors[key])
        })
    }, [form, notificationCtx])

    return {
        form,
        active,
        nextStep,
        prevStep,
        handleActive
    }
}