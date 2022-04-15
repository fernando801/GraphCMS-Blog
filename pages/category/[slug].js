import Head from 'next/head'
import { Header, PostCard, Categories } from '@/components/index'
import {
  getCategories,
  getCategoryData,
  getCategorySlugs,
  getPostsByCategory,
} from '@/lib/api'

export default function Home({ category, posts, categories }) {
  return (
    <>
      <Head>
        <title>GraphCMS Blog</title>
        <meta
          name='description'
          content='A blog created usin Next.js and GraphCMS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header categories={categories} />
      <div className='container mx-auto px-5 md:px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8 flex flex-col gap-8'>
            <h1 className='text-4xl sm:text-5xl sm:py-4 font-bold text-center'>
              {category.name}
            </h1>
            {posts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky lg:top-8 flex flex-col gap-8'>
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const category = await getCategoryData(params.slug)
  const posts = (await getPostsByCategory(params.slug)) || []
  const categories = (await getCategories()) || []

  return {
    props: {
      category,
      posts,
      categories,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getCategorySlugs()
  return {
    paths,
    fallback: false,
  }
}
