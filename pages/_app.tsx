import { AppProps } from 'next/app'
import Head from 'next/head'
import { BookProvider } from '@/context/use-book'
import BaseTemplate from '@/layouts/Base'
import SEO from '@/next-seo.config'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <BookProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Challenge books</title>
          <meta name="description" content="Challenge books" />
          <link rel="shortcut icon" href="/icons/icon-512.png" />
          <link rel="apple-touch-icon" href="/icons/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <DefaultSeo {...SEO} />

        <NextNprogress
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          color="#fe6a78"
          options={{ showSpinner: false }}
        />

        <GlobalStyles />

        <BaseTemplate>
          <Component {...pageProps} />
        </BaseTemplate>
      </ThemeProvider>
    </BookProvider>
  )
}

export default App
