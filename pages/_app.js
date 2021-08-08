/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Projeto Portfólio</title>
        <meta name="description" content="Meu primeiro projeto em React com Next.js e Styled Components" />
        <meta property="og:title" content="Projeto Portfólio" />
        <meta property="og:description" content="Meu primeiro projeto em React com Next.js e Styled Components" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wallace-barbeiro-bootcamp-frontend-alura.vercel.app/" />
        <meta property="og:image" content="https://wallace-barbeiro-bootcamp-frontend-alura.vercel.app/images/capa.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,500&display=swap" rel="stylesheet" />
        {/* <link rel="shortcut icon" href="" /> */}
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
