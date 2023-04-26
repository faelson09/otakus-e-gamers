import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

interface propsN {
    style: string;
}

function Rodape({ style }: propsN) {
    return (
        <nav className={`w-full flex flex-col items-center justify-center  ${style}`}>
            <div className="border-b-[1px] border-[#c4c4c4] pb-5 flex flex-col items-center max-[2600px]:w-full w-[2600px]">
                <div className='w-[88%] flex justify-between items-stretch  max-sm:flex-wrap'>
                    <div className='w-[22%] max-sm:w-[40%]'>
                        <p className="text-andorinha flex items-center text-xl">
                            <Image width={28} height={30} src="/icon.svg" className="w-7 mr-1" alt="" />Andorinha
                        </p>
                        <p className='text-[#515151] text-sm mt-3 leading-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum saepe magni dolor natus </p>
                        <p className='text-[#515151] text-sm mt-2'>@Lorem</p>
                    </div>
                    <div className='w-[22%] pl-7  max-sm:w-[40%]'>
                        <ul>
                            <li className='text-base font-medium text-black'>Sobre</li>
                            <li className='text-[#515151] text-sm mt-3'><Link href={""}>Lorem</Link></li>
                            <li className='text-[#515151] text-sm mt-1'><Link href={""}>Portfolio</Link></li>
                            <li className='text-[#515151] text-sm mt-1'><Link href={""}>Carreras</Link></li>
                            <li className='text-[#515151] text-sm mt-1'><Link href={""}>Contactos</Link></li>
                        </ul>
                    </div>
                    <div className='w-[22%] pl-7 max-sm:w-[50%] max-sm:mt-4 max-sm:pl-0'>
                        <ul>
                            <li className='text-base font-medium text-black'>Sobre</li>
                            <li className='text-[#515151] text-sm mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li className='text-[#515151] text-sm mt-2'><Link href="tel:=244900000">+244 900 000</Link></li>
                        </ul>
                    </div>
                    <div className='w-[22%] pl-7 flex max-sm:w-[46%]'>
                        <ul className='flex justify-between items-end w-[90%] max-sm:flex-wrap'>
                            <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={"https://facebook.com/andorinha.co.ao"}><FaFacebookF /></Link></li>
                            <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={""}><FaInstagram /></Link></li>
                            <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={""}><FaTwitter /></Link></li>
                            <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={"https://instagram.com/andorinha.ao/"}><FaLinkedinIn /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center h-20'><span className='mt-4'>Copyright © 2023 ANDORINHA TECNOLOGIA</span></div>
        </nav>
    )
}

export default Rodape
