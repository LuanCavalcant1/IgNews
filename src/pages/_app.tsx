import React from 'react'


import '../styles/global.scss'
import { Header } from '../components/Header'

import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps:{session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
