import Link from 'next/link'
import Image from 'next/image'
import DateFormater from './DateFormater'

export default function PostThumbnail({ post }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className='flex items-center gap-2 p-1 rounded-md overflow-hidden active:bg-gray-200'>
        <div className='shrink-0 h-16 w-16 rounded-md overflow-hidden relative cursor-pointer'>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
        <div className='self-stretch py-1 grow cursor-pointer'>
          <p className='text-sm sm:text-base lg:text-sm hover:underline'>{post.title}</p>
          <DateFormater className='text-gray-600 font-light text-xs sm:text-sm lg:text-xs' dateString={post.createdAt} />
        </div>
      </div>
    </Link>
  )
}
