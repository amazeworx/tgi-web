import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
