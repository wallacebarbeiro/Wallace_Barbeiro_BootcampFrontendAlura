/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Box from '../src/components/foundation/Box';
import Text from '../src/components/foundation/Text';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Pagina404() {
  return (
    <Box
      flex="1"
      minWidth="100%"
      display="flex"
      flexWwrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url(/images/bg.png)"
      backgroundSize="100% auto"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
    >
      <Box
        flex="1"
        display="flex"
        flexWwrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px 16px"
      >
        <Box
          minWidth="100%"
          boxShadow="0px 0px 0px 1px #444, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #444"
        />
        <Text
          tag="h1"
          fontSize="33px"
          fontWeight="300"
          textAlign="center"
        >
          {'<Ops! Error />'}
          <Text
            tag="b"
            fontSize="75px"
            margin={{
              xs: '20px 0px 0px 0px',
              md: '0px 0px 0px 10px',
            }}
            color="#6ecacb"
            display={{
              xs: 'block',
              md: 'inline-block',
            }}
          >
            {'// 404...'}
          </Text>
        </Text>
        <Text
          color="#444"
          textAlign="center"
          margin="0px 0px 20px 0px"
        >
          A página que você tentou acessar não foi encontrada.
        </Text>
        <Box
          minWidth="100%"
          boxShadow="0px 0px 0px 1px #e4168a, 2px 2px 0px 1px #f0f0f0, 4px 4px 0px 1px #00b795"
        />
      </Box>
    </Box>
  );
}

export default websitePageHOC(Pagina404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});
