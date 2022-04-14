export default function PostCard({ post }) {
  return (
    <div className='p-4'>
      <h2 className='text-white font-bold'>{post.title}</h2>
      <p>{post.excerpt}</p>
    </div>
  )
}
