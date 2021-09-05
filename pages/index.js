import React from 'react';
import Capa from '../src/components/commons/Capa';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <>
      <Capa />
      <WrapperProjetos websitePageContext={websitePageContext} />
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {},
  },
});
