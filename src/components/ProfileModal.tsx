import React, { ReactNode } from 'react'
interface Props {
   show: boolean
   left?: number
   right?: number
   top?: number
   bottom?: number
   profile: {
      id: string;
      name: string;
      length: number;
      color: string;
      image: string;
   } | undefined
}
export function ProfileModal({ show = false, top, left, right, bottom, profile }: Props) {
   if (!show) return null
   return (
      <div
         className={`z-50 absolute duration-200 transition-all rounded bg-white px-2 py-3 flex flex-col items-center`}
         style={{
            top: top, left: left,
            right: right,
            bottom: bottom,
         }}>
         <img src={profile?.image} alt="" className={`object-cover rounded-full h-14 w-14 border-2 border-solid`} style={{ borderColor: profile?.color }} />
         <p className='capitalize'>{profile?.name}</p>
         <p>membros: {profile?.length}</p>
      </div>
   )
}
