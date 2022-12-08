import type { AppProps } from 'next/app';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Head from 'next/head';

import Header from '../components/common/header';
import Footer from '../components/common/footer';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Boilerplate</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </RecoilRoot>
  );
}
