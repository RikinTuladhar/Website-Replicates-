import React from 'react'
import BlogCard from '../component/BlogCard'

const Seven = () => {
  return (
    <div className='w-full px-2 py-10 space-y-5'>
      <div>
        <h1 className='text-[#17224d] text-5xl font-semibold text-center'>Our Blogs</h1>
      </div>
      <div className='flex flex-wrap justify-around w-full gap-6'>
        {Array.from({length:3},(_,i)=>(
            <BlogCard key={i}/>
        ))}

      </div>
    </div>
  )
}

export default Seven
