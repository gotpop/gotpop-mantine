import { useContext, useEffect } from "react"
import NotificationContext from "@/context/notificationContext"
import { useStyles } from "./NotificationBar.styles"
import { Notification } from "@mantine/core"

export const NotificationBar = () => {
  const { notifications, notification, notificationText, clear } = useContext(NotificationContext)
  const { classes } = useStyles()

  useEffect(() => {
    console.log("notificationCtx :", notifications)
  }, [notifications])

  const notes = notifications?.map((note, i) => {
    return (
      <Notification className={classes.note} key={i} disallowClose color="red" p={20} mb={10}>
        {note.text}
      </Notification>
    )
  })

  return (
    <>
      {notifications.length !== 0 && (
        <>
          <div className={classes.root}>{notes}</div>
        </>
      )}
    </>
  )
}
