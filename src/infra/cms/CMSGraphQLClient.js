/* eslint-disable import/prefer-default-export */
import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query, variables }) {
      const projectsPage = await client.request(query, variables);
      return {
        data: {
          projectsPage,
        },
      };
    },
  };
}
