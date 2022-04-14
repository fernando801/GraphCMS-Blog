import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export async function getPosts() {
  const query = gql`
    query MyQuery {
      posts {
        id
        title
        slug
        author {
          id
          name
          photo {
            url
          }
        }
        featuredImage {
          id
          fileName
          url
        }
        excerpt
        categories {
          id
          name
          slug
        }
        createdAt
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}
