import React from 'react';
import PropTypes from 'prop-types';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Sobre({ projetos }) {
  return (
    <AboutScreen projetos={projetos} />
  );
}

export default websitePageHOC(Sobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

export async function getStaticProps() {
  const projetos = await fetch('https://api.github.com/users/wallacebarbeiro/repos')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaComvertida) => respostaComvertida);

  return {
    props: {
      projetos,
    }, // will be passed to the page component as props
  };
}

Sobre.defaultProps = {
  projetos: [],
};

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projetos: PropTypes.array,
};
