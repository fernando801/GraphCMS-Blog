import Head from 'next/head'
import { Header, PostCard, PostWidget, Categories } from '@/components/index'
import { getCategories, getPosts, getRecentPosts } from '@/lib/api'

export default function Home({ posts, recentPosts, categories }) {
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
            {posts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky lg:top-8 flex flex-col gap-8'>
              <PostWidget recentPosts={recentPosts} />
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  const categories = (await getCategories()) || []
  const recentPosts = (await getRecentPosts()) || []

  return {
    props: {
      posts,
      categories,
      recentPosts,
    },
  }
}
