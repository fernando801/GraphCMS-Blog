import Head from 'next/head'
import { Header, PostCard, PostWidget, Categories } from '@/components/index'
import { getPosts, getRecentPost } from '@/lib/api'

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  const recentPosts = (await getRecentPost()) || []

  return {
    props: {
      posts,
      recentPosts,
    },
  }
}

export default function Home({ posts, recentPosts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
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
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
