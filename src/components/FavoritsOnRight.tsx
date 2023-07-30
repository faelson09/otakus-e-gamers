import React from 'react'
import { comunidades } from './assets'

interface Props {
   post: {
      nome: string
      descricao: string
      url_da_image: string
      isbest: boolean
      id: string
      comunidadeId: string
   }
}
export function FavoritsOnRight({ post }: Props) {
   const comunity = comunidades.find((i) => {
      const nameId = `${i.id}`;
      return nameId === post.comunidadeId;
   });
   return (
      <div className='flex items-center capitalize my-2 '>
         <img width={50} src={post.url_da_image} className='mr-2 h-9 w-12 object-cover' height={50} alt={`imagem de ${post.nome.slice(0, 6)}`} />
         <p className={`h-1 flex items-end`} style={{ backgroundColor: comunity?.color }}>{post.nome}</p>
      </div>
   )
}
