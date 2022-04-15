import Link from 'next/link'

export default function Categories({ categories }) {
  return (
    <div className='bg-white drop-shadow-md rounded-md px-2 py-4'>
      <h2 className='font-semibold p-2 text-lg'>Categories</h2>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <div className='rounded-md p-2 cursor-pointer hover:underline active:bg-gray-200'>{category.name}</div>
        </Link>
      ))}
    </div>
  )
}
