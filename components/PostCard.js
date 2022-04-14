import Link from 'next/link'
import Image from 'next/image'
import DateFormater from './DateFormater'
import Categories from './Categories'

export default function PostCard({ post }) {
  return (
    <div className='bg-white drop-shadow-md rounded-md overflow-hidden'>
      <Link href={`/post/${post.slug}`}>
        <div className='h-64 md:h-72 relative cursor-pointer'>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
      </Link>
      <div className='p-4'>
        <Link href={`/post/${post.slug}`}>
          <h2 className='text-3xl font-semibold py-2 hover:underline cursor-pointer'>
            {post.title}
          </h2>
        </Link>
        <div className='flex gap-2 text-xs pb-2'>
          {post.categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='p-1 rounded bg-gray-200 cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className='text-sm font-light text-gray-600 flex items-center justify-between gap-2 flex-wrap py-2'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-full overflow-hidden relative'>
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                layout='fill'
                objectFit='cover'
                priority={true}
              />
            </div>
            <span>{post.author.name}</span>
          </div>
          <DateFormater dateString={post.createdAt} />
        </div>
        <p className='py-2'>{post.excerpt}</p>
        <div className='flex py-2'>
          <Link href={`/post/${post.slug}`}>
            <div className='bg-black text-white text-sm p-2 px-4 inline-block rounded-full cursor-pointer hover:underline'>
              Continue Reading
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
