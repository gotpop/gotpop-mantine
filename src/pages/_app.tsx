import { MantineProvider } from "@mantine/core"
import type { AppProps } from "next/app"
import { Bebas_Neue, Montserrat } from "@next/font/google"
import { SessionProvider } from "next-auth/react"
import { Notifications } from "@mantine/notifications"

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
    <div
      className={`${bebas.variable} ${montserrat.variable}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            fontFamily: "var(--font-montserrat), Verdana, sans-serif",
            headings: { fontFamily: "var(--font-bebas), Greycliff CF, sans-serif" }
          }}
        >
          <Notifications limit={3} />
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </div>
  )
}
