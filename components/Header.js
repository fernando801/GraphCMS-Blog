import Link from 'next/link'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'webdev' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Education', slug: 'education' },
  { name: 'Sports', slug: 'sports' },
]

export default function Header({ props }) {
  return (
    <div className='bg-black'>
      <div className='container flex justify-center items-center md:justify-between text-white mx-auto px-10 py-8 mb-8'>
        <Link href='/'>
          <h1 className='text-4xl text-center font-bold md:whitespace-nowrap cursor-pointer'>GraphCMS Blog</h1>
        </Link>
        <nav className='hidden md:flex md:flex-wrap justify-end items-center gap-x-6 gap-y-1'>
          {categories.map(category => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='text-lg cursor-pointer hover:underline'>{category.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
