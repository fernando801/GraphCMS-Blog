import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <div className='bg-white drop-shadow-md rounded-lg overflow-hidden'>
      <div className='h-64 md:h-72 relative'>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-bold py-2'>{post.title}</h2>
        <div className='text-sm flex items-center gap-2'>
          <div className='h-8 w-8 rounded-full overflow-hidden relative'>
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <span>{post.author.name}</span>
        </div>
        <p className='py-2'>{post.excerpt}</p>
        <div className='flex gap-1'></div>
      </div>
    </div>
  )
}
