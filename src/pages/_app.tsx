import { NextUIProvider } from '@nextui-org/react'

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  // 2. Use at the root of your app
  return (
    // <NextUIProvider>
    <Component {...pageProps} />
    // </NextUIProvider>
  )
}

export default App
