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

export async function getPostSlugs() {
  const query = gql`
    query MyQuery {
      posts {
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  const paths = result.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return paths
}

export async function getPostData(slug) {
  const query = gql`
    query GetPostData($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        author {
          id
          name
          bio
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
        content {
          raw
        }
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

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export async function getRecentPosts() {
  const query = gql`
    query getRecentPosts {
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

export async function getRelatedPosts(slug, categories) {
  const query = gql`
    query getRelatedPosts($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } },
        orderBy: createdAt_DESC,
        first: 3
      ) {
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
  const result = await request(graphqlAPI, query, { slug, categories })

  return result.posts
}

export async function getCategories() {
  const query = gql`
    query MyQuery {
      categories {
        id
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories
}
