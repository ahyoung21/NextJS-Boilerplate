import type { AppProps } from 'next/app';

import { store } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="title" />
          <meta property="og:description" content="description" />
          <meta property="og:image" content="" />
          <link rel="icon" href="/favicon.ico" />
          <title>project</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
