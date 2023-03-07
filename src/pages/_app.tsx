import { MantineProvider } from "@mantine/core"
import type { AppProps } from "next/app"
import { Bebas_Neue, Montserrat } from "@next/font/google"
import { SessionProvider } from "next-auth/react"
import { NotificationProvider } from "@/context/notificationContext"
import { NotificationBar } from "@/components/NotificationBar/NotificationBar"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-montserrat"
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className={`${bebas.variable} ${montserrat.variable}`}>
      <SessionProvider session={session}>
        <NotificationProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: "light",
              fontFamily: "var(--font-montserrat), Verdana, sans-serif",
              headings: { fontFamily: "var(--font-bebas), Greycliff CF, sans-serif" }
            }}
          >
            <NotificationBar />
            <Component {...pageProps} />
          </MantineProvider>
        </NotificationProvider>
      </SessionProvider>
    </div>
  )
}
