import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Portfólio - Meu primeiro projeto em React com Next.js e Styled Components';
  const title = hasHeadTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;
  const description = 'Meu primeiro projeto em React com Next.js e Styled Components';
  const urlBase = 'https://wallace-barbeiro-bootcamp-frontend-alura.vercel.app/';
  const image = 'https://wallace-barbeiro-bootcamp-frontend-alura.vercel.app/images/capa.png';
  return (
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
