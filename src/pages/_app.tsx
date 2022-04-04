import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { defaultTheme } from '~/styles/defaultTheme';
import { getLibrary } from '~/utils/web3';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Web3 Payments</title>

        <meta
          name="description"
          content="A platform for payments using web3."
        />
        <meta
          name="keywords"
          content="crypto, binance, bitcoin, ethereum, web3, metamask"
        />

        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider theme={defaultTheme} resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </Web3ReactProvider>
    </>
  );
};

export default MyApp;
