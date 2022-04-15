import Image from 'next/image'

export default function Author ({ author }) {
  return (
    <div className='text-center px-4'>
      <div className='h-32 w-32 mx-auto rounded-full overflow-hidden relative'>
        <Image
          src={author.photo.url}
          alt={author.name}
          layout='fill'
          objectFit='cover'
          priority={true}
        />
      </div>
      <h2 className='text-xl font-bold py-4'>{author.name}</h2>
      <p>{author.bio}</p>
    </div>
  )
}