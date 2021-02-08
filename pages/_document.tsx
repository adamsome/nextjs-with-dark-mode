import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { DarkModeScript } from '../components/dark-mode-script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <DarkModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
