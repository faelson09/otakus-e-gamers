import { Download, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Gallery = () => {
   const [images, setImages] = useState<string>("");
   const img = useRef<HTMLImageElement | null>(null)
   useEffect(() => {
      fetchImages();
   }, []);

   const fetchImages = async () => {
      try {
         const response = await fetch('https://api.waifu.pics/sfw/waifu');
         const data = await response.json();
         setImages(data.url);
      } catch (error) {
         console.error('Error fetching images:', error);
      }
   };

   const [best, setBest] = useState<boolean>(false)

   useEffect(() => {
      const favorites = localStorage.getItem('favoritos');
      if (favorites && favorites.includes(`${images}`) && String(images) !== "") {
         setBest(true)
      }

   })
   function defBest() {
      const storedIds = localStorage.getItem('favoritos');
      let favoritos = [];

      if (storedIds) {
         favoritos = JSON.parse(storedIds);
      }

      if (best) {
         const updatedIds = favoritos.filter((id: string) => id !== images);
         localStorage.setItem('favoritos', JSON.stringify(updatedIds));
      } else {
         favoritos.push(images);
         localStorage.setItem('favoritos', JSON.stringify(favoritos));
      }

      setBest(!best);
   };

   const download = (filename: string, content: string) => {

      const element = document.createElement("a");
      element.setAttribute("href", content);
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
   };

   const handleDownload = async (e: any) => {
      try {
         const result = await fetch(`${img.current?.src}`, {
            method: "GET",
            headers: {}
         });
         console.log("ola");
         const blob = await result.blob();
         const url = URL.createObjectURL(blob);
         download("faelson09 waifu paradise.png", url);
         URL.revokeObjectURL(url);

      } catch (error) {
         console.error(error);
      }
   };
   return (

      <div className='select-none bg-white/0 px-3 mb-6 h-[350px] overflow-hidden '>
         <div className='h-full w-full rounded flex items-center justify-center overflow-hidden relative'>
            <Star className={`cursor-pointer text-yellow-400 z-10 absolute top-2 left-2 ${best ? 'fill-yellow-400' : "fill-none"}`} onClick={defBest} />
            <Image ref={img} className={`w-full h-full max-w-full hover:scale-150 duration-300 object-cover`} src={images ? images : "/load.svg"} alt='ola' width={400} height={600} />

            <button onClick={handleDownload} type="button" className='cursor-pointer text-yellow-400 z-10 absolute bottom-2 right-2'>
               <Download />
            </button>
         </div>
      </div>
   );
};

export default Gallery;
