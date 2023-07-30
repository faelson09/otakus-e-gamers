import { Camera, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { comunidades, posts } from './assets'
import { ProfileModal } from './ProfileModal'

interface props {
  data: {
    nome: string
    descricao: string
    url_da_image: string
    isbest: boolean
    id: string
    comunidadeId: string
  }
}
function Post({ data }: props) {
  const [best, setBest] = useState<boolean>(false)
  useEffect(() => {
    const favorites = localStorage.getItem('favoritos');
    if (favorites) {
      if (favorites.includes(data.id)) {
        setBest(true)
      }
    }

  })
  function defBest() {
    const storedIds = localStorage.getItem('favoritos');
    let favoritos = [];

    if (storedIds) {
      favoritos = JSON.parse(storedIds);
    }

    if (best) {
      const updatedIds = favoritos.filter((id: string) => id !== data.id);
      localStorage.setItem('favoritos', JSON.stringify(updatedIds));
    } else {
      favoritos.push(data.id);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }

    setBest(!best);
  };
  const comunity = comunidades.find((i) => {
    const nameId = `${i.id}`;
    return nameId === data.comunidadeId;
  });
  const [showProfile, setShowProfile] = useState<boolean>(false)
  return (
    <div className='select-none bg-white/0 px-3 mb-6 h-[350px] relative group'>
      <div className='h-full w-full rounded overflow-hidden relative'>
        <Star className={`cursor-pointer text-yellow-400 z-10 absolute top-2 left-2 ${best ? 'fill-yellow-400' : "fill-none"}`} onClick={defBest} />
        <img className='w-full h-full max-w-full hover:scale-150 duration-300 object-cover group-hover:scale-150' src={data.url_da_image} alt='ola' width={400} height={600} />
        <p className='text-lg text-white pointer-events-none capitalize bg-black/30  px-2 py-1 z-10 absolute bottom-0 w-full '>{data.nome}</p>
      </div>
      <div onMouseOver={() => setShowProfile(true)} onMouseOut={() => setShowProfile(false)}>
        <span className={`absolute right-4 top-2 p-2 rounded-full cursor-pointer`} style={{ backgroundColor: comunity?.color }} ></span>
        <ProfileModal show={showProfile} top={-50} right={0} profile={comunity} />
      </div>
    </div>
  )
}

export default Post