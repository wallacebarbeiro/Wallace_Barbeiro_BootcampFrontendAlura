/* eslint-disable import/prefer-default-export */

import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
    query {
      allPageProjetos {
        projectImage {
          url
        }
        projectTitle
        projectDescription
        projectLink
        projectSlug
      }
    }
  `;

  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.projectsPage;
}
