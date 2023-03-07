import { Mission } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/router"
import NotificationContext from "@/context/notificationContext"
import { useContext } from "react"

type MissionNoMeta = Omit<Mission, "id" | "createdAt" | "updatedAt" | "userId">

export function useSubmit() {
    const notificationCtx = useContext(NotificationContext)
    const router = useRouter()

    const handleSubmit = async (values: MissionNoMeta, handleLoading: (loading: boolean) => void) => {
        handleLoading(true)
        const stringData = JSON.stringify(values)
        await axios.post("/api/mission", stringData)

        handleLoading(false)
        notificationCtx.success("Success: Project was fetched!")
        router.push("/mission-control")
    }


    return { handleSubmit }
}