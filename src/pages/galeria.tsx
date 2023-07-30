import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Gallery from '@/components/Galery';
import Image from 'next/image';

const Galeria = () => {
   const images = ["", "", "", "", "", ""]

   const [havBests, setHaveBests] = useState<boolean>(false)
   const [favoritList, setFavoritList] = useState<string[]>([])
   useEffect(() => {
      const favorites = localStorage.getItem('favoritos');
      if (favorites) {
         if (JSON.parse(favorites).length < 1 && favorites.includes("https://i.waifu.pics/") === false) {
            setHaveBests(false)
         } if (JSON.parse(favorites).length > 0 && favorites.includes("https://i.waifu.pics/")) {
            setHaveBests(true)
         }
         setFavoritList(JSON.parse(favorites))
      }
   }, images)

   return (
      <>
         <Head>
            <title>Galeria</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className={`relative  my-6 w-full px-8 h-fit flex justify-between items-start`}>
            <div className={`bg-[#00000083] border-2 border-black ${havBests ? "w-[75%] duration-150 grid-cols-4" : "w-full grid-cols-5 duration-150"} h-fit grid  pt-4`}>


               {images.map((ola, index) => (
                  <Gallery key={index} />
               ))}
            </div>
            {
               havBests && (<div className='bg-[#00000083] w-[23%] h-fit p-2 border-2 border-black'>
                  {favoritList
                     .filter((fav) => fav.includes("https://i.waifu.pics/"))
                     .map((favorit) => (
                        <div key={favorit} className='flex items-center '>
                           <Image src={favorit} alt="" />
                        </div>
                     ))}
               </div>)}
         </div>
      </>
   );
};

export default Galeria;
