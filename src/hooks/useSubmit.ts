import { Mission } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/router"
import NotificationContext from "@/context/notificationContext"
import { useContext, useState } from "react"

type MissionNoMeta = Omit<Mission, "id" | "createdAt" | "updatedAt" | "userId">

export function useSubmit() {
    const [isLoading, setIsLoading] = useState(false)
    const notificationCtx = useContext(NotificationContext)
    const router = useRouter()

    const handleSubmit = async (values: MissionNoMeta) => {
        setIsLoading(true)
        const stringData = JSON.stringify(values)
        await axios.post("/api/mission", stringData)

        setIsLoading(false)
        notificationCtx.success("Success: Project was fetched!")
        router.push("/mission-control")
    }


    return { handleSubmit, isLoading }
}