import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export async function getPosts() {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
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
        featuredPost
        createdAt
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export async function getRecentPost() {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC, first: 3) {
        id
        title
        slug
        featuredImage {
          id
          fileName
          url
        }
        featuredPost
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}
