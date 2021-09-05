import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import Projeto from '../../src/components/screens/ProjetoScreen';
import projects from '../../db.json';

function PageProjeto({ projectInfo }) {
  return (
    <>
      {/* <pre>
        {JSON.stringify(props, null, 4)}
      </pre> */}
      <Projeto projectInfo={projectInfo} />
    </>

  );
}

PageProjeto.propTypes = Projeto.propTypes;

export default websitePageHOC(PageProjeto);

export async function getStaticProps({ params }) {
  const projectsList = projects.projects;

  //   console.log(params.slug)

  const dadosDoProjeto = projectsList.reduce((valorAcumulado, elemento) => {
    const toArray = [];
    toArray.push(elemento);
    const dados = toArray.find((item) => {
      if (item.slug === params.slug) {
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
          headTitle: dadosDoProjeto.info.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const projectsList = projects.projects;

  const paths = projectsList.reduce((valorAcumulado, elemento) => [
    ...valorAcumulado,
    { params: { slug: elemento.slug } },
  ], []);

  return {
    paths,
    fallback: false,
  };
}
