import PostThumbnail from './PostThumbnail'

export default function PostWidget({ recentPosts, relatedPosts }) {
  return (
    <div className='bg-white drop-shadow-md rounded-md px-2 py-4'>
      {recentPosts && (
        <>
          <h2 className='font-semibold p-2 text-lg'>Recent Posts</h2>
          {recentPosts?.length === 0 ? (
            <p className='text-gray-600 font-light text-sm sm:text-base lg:text-sm px-2'>No Recent Posts</p>
          ) : (
            recentPosts.map((post) => <PostThumbnail key={post.slug} post={post}/>)
          )}
        </>
      )}

      {relatedPosts && (
        <>
          <h2 className='font-semibold p-2 text-lg'>Recent Posts</h2>
          {relatedPosts?.length === 0 ? (
            <p className='text-gray-600 font-light text-sm sm:text-base lg:text-sm px-2'>No Related Posts</p>
          ) : (
            relatedPosts.map((post) => <PostThumbnail key={post.slug} post={post}/>)
          )}
        </>
      )}
    </div>
  )
}
