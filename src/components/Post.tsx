import Image from 'next/image'
import React from 'react'

interface props{
  data:{
    nome:string
    descricao:string
    url_da_image:string
    isbest:boolean
  }
}
function Post({data}:props) {
  return (
    <div className='w-1/4 bg-white/0 px-3 mb-8 h-[350px] overflow-hidden '>
      <div className='h-full w-full rounded overflow-hidden relative'>
        <img className='w-full h-full max-w-full hover:scale-150 hover:duration-300 duration-300 object-cover' src={data.url_da_image} alt='ola' width={400} height={600} />
        <p className='bg-black/30 text-lg text-white px-2 py-1 z-10 absolute bottom-0 w-full pointer-events-none capitalize'>{data.nome}</p>
      </div>
    </div>
  )
}

export default Post