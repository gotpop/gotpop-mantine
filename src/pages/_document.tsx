import { createGetInitialProps } from "@mantine/next"
import { Html, Head, Main, NextScript, DocumentContext } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const getInitialProps = createGetInitialProps()

  return getInitialProps(ctx)
}
