import { useContext, useEffect } from "react"
import NotificationContext from "@/context/notificationContext"
import { useStyles } from "./NotificationBar.styles"
import { Notification } from "@mantine/core"

export const NotificationBar = () => {
  const notificationCtx = useContext(NotificationContext)
  const { classes } = useStyles()

  useEffect(() => {
    console.log("notificationCtx :", notificationCtx)
  }, [notificationCtx])

  return (
    <>
      {notificationCtx.notification !== null && (
        <>
          <div className={classes.root}>
            <Notification disallowClose color="red" p={20}>
              {notificationCtx.notificationText}
            </Notification>
          </div>
        </>
      )}
    </>
  )
}

// notificationCtx.notification !== null && (
