import React, { ReactNode } from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
