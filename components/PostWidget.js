export default function PostWidget({ recentPosts, relatedPosts }){
  return (
    <div className='bg-white drop-shadow-md rounded-md p-4'>
      { recentPosts && <h2 className='font-semibold'>Recent Posts</h2>}
      { relatedPosts && <h2 className='font-semibold'>Related Posts</h2>}
    </div>
  )
}