import { RichText } from '@graphcms/rich-text-react-renderer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Header,
  Author,
  PostWidget,
  Categories,
  DateFormater,
} from '@/components/index'
import {
  getCategories,
  getPostData,
  getPostSlugs,
  getRelatedPosts,
} from '@/lib/api'

export default function Post({ post, categories, relatedPosts }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name='description'
          content='A blog created usin Next.js and GraphCMS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header categories={categories} />
      <div className='container mx-auto px-5 md:px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8 flex flex-col gap-8 '>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl sm:text-5xl sm:py-4 font-bold text-center'>
                {post.title}
              </h1>
              <div className='flex gap-2 justify-center flex-wrap'>
                {post.categories.map((category) => (
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    <div className='px-2 py-1 text-xs sm:text-sm xl:text-base rounded bg-gray-200 cursor-pointer'>
                      {category.name}
                    </div>
                  </Link>
                ))}
              </div>
              <p className='text-center text-base font-light text-gray-600'>
                Published <DateFormater dateString={post.createdAt} /> by{' '}
                {post.author.name}
              </p>
              <div className='rounded-md h-64 md:h-72 xl:h-96 relative overflow-hidden'>
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  layout='fill'
                  objectFit='cover'
                  priority={true}
                />
              </div>
            </div>
            <div className='flex flex-col gap-6 px-4 text-justify rich_text'>
              <RichText content={post.content.raw} />
            </div>
            <Author author={post.author} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky lg:top-8 flex flex-col gap-8'>
              <PostWidget relatedPosts={relatedPosts} />
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug)
  const postCategories = post.categories.map((category) => category.slug)
  const relatedPosts = await getRelatedPosts(params.slug, postCategories)
  const categories = (await getCategories()) || []

  return {
    props: {
      post,
      relatedPosts,
      categories,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getPostSlugs()
  return {
    paths,
    fallback: false,
  }
}
