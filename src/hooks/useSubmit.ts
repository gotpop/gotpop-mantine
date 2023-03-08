import { notifications } from "@mantine/notifications"
import { Mission } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

type MissionNoMeta = Omit<Mission, "id" | "createdAt" | "updatedAt" | "userId">

export function useSubmit() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (values: MissionNoMeta) => {
        setIsLoading(true)
        await axios.post("/api/mission", values)

        setIsLoading(false)

        notifications.show({
            title: 'Done',
            message: 'Successfully created mission',
            color: 'green',
        })

        router.push("/mission-control")
    }


    return { handleSubmit, isLoading }
}