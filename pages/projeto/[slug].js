import React from 'react';

import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import Projeto, { getContent } from '../../src/components/screens/ProjetoScreen';

function PageProjeto({ projectInfo }) {
  return (
    <>
      <Projeto projectInfo={projectInfo} />
    </>

  );
}

PageProjeto.propTypes = Projeto.propTypes;

export default websitePageHOC(PageProjeto);

export async function getStaticProps({ params }) {
  const projectsPage = await getContent();

  const projectsList = projectsPage.allPageProjetos;

  const dadosDoProjeto = projectsList.reduce((valorAcumulado, elemento) => {
    const toArray = [];
    toArray.push(elemento);
    const dados = toArray.find((item) => {
      if (item.projectSlug === params.slug) {
        return true;
      }
      return false;
    });

    if (dados) {
      return {
        ...valorAcumulado,
        info: dados,
      };
    }
    return valorAcumulado;
  }, {});

  return {
    props: {
      projectInfo: dadosDoProjeto.info,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDoProjeto.info.projectTitle,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const projectsPage = await getContent();

  const paths = projectsPage.allPageProjetos.reduce((valorAcumulado, elemento) => [
    ...valorAcumulado,
    { params: { slug: elemento.projectSlug } },
  ], []);

  return {
    paths,
    fallback: false,
  };
}
