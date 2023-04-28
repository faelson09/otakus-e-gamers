import Image from 'next/image'
import React from 'react'

function Post() {
  return (
    <div className='w-1/4 bg-white/0 px-3 mb-8 h-[350px] overflow-hidden'>
      <div className='w-full h-full'>
        <div className='h-[full] w-full overflow-hidden rounded-t-md'>
          <Image className='w-full h-full hover:scale-150 hover:duration-300 duration-300' src='/images/faelson09.png' alt='ola' width={400} height={600}/> 
        </div>
        <p className='bg-black/30 mt-3 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci doloribus velit dignissimos, et recusandae hic veniam nihil nemo, quaerat maiores dolores corporis incidunt </p>
      </div>
    </div>
  )
}

export default Post