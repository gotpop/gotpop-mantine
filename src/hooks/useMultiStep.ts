import { useForm } from "@mantine/form"
import { formInit } from "../components/MultiStepForm/form"
import { SetStateAction, useEffect, useState } from "react"
import { notifications } from "@mantine/notifications"

export function useMultiStep() {
    const [active, setActive] = useState<number>(0)

    const handleActive = (active: SetStateAction<number>) => setActive(active)

    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current))

        notifications.clean()
    }

    const form = useForm({
        initialValues: formInit,
        validateInputOnChange: true,
        validate: ({ missionType, contacts, nft, finalWish }) => {
            if (active === 0) {
                return {
                    missionType: missionType.length === 0 ? "Pick a mission" : null
                }
            }

            if (active === 1) {
                const checkboxes = contacts.filter(({ active }) => active === true)

                return {
                    contacts: checkboxes.length <= 2 ? "Pick at least 3 contacts" : null
                }
            }

            if (active === 2) {
                return {
                    nftLogo: nft.logo.length === 0 ? "Pick a Logo" : null,
                    nftTagline: nft.tagline.length === 0 ? "Pick a Tagline" : null,
                    nftBackground: nft.background.length === 0 ? "Pick a Background" : null
                }
            }

            if (active === 3) {
                return {
                    finalWish: finalWish.length === 0 ? "Pick a final wish" : null
                }
            }

            return {}
        }
    })

    const nextStep = () => {
        handleActive((current) => {
            if (form.validate().hasErrors) {
                return current
            }

            return current < 4 ? current + 1 : current
        })

        notifications.clean()
    }

    useEffect(() => {
        console.log('form :', form);
        if (form.isValid()) return

        Object.keys(form.errors).map((key) => {
            notifications.show({
                title: 'Error',
                message: form.errors[key],
                color: 'red',
            })
        })
    }, [form])

    return {
        form,
        active,
        nextStep,
        prevStep,
        handleActive
    }
}