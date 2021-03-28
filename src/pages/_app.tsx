import React from 'react';

import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import GlobalStyle from 'styles/global';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Jüssi | The Business Agency.</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
