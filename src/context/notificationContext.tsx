import { FormErrors } from "@mantine/form"
import React, { ReactNode, useState } from "react"

type NotificationContextType = {
  notification: string | null
  notifications: any[]
  notificationText: string | null | undefined | ReactNode
  success: (text: string) => void
  error: (text: string | FormErrors[string]) => void
  clear: () => void
}

const NotificationContext = React.createContext<NotificationContextType>({
  notification: null,
  notifications: [],
  notificationText: null,
  success: (text) => {},
  error: (text) => {},
  clear: () => {}
})

const STATES = {
  SUCCESS: "success",
  ERROR: "error"
}

type Props = {
  children: React.ReactNode
}

type ObjType = {
  text: string | React.ReactNode
  type: string
}

const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<null | string>(null)
  const [notificationText, setNotificationText] = useState<null | string | ReactNode>(null)
  const [notifications, setNotifications] = useState<ObjType[]>([])

  const success = (text: string) => {
    setNotificationText(text)
    setNotification(STATES.SUCCESS)
  }

  const error = (text: string | React.ReactNode) => {
    setNotificationText(text)
    setNotification(STATES.ERROR)

    const obj = {
      text,
      type: STATES.ERROR
    }

    setNotifications((prev) => [...prev, obj])
  }

  const clear = () => {
    setNotifications([])
  }

  return (
    <NotificationContext.Provider
      value={{
        success,
        error,
        clear,
        notification,
        notifications,
        notificationText
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider }
export default NotificationContext
