import { useState } from "react"

export function useStepControl(form: any) {
    const [active, setActive] = useState(0)

    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current
            }
            return current < 4 ? current + 1 : current
        })

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    return { active, nextStep, prevStep }
}