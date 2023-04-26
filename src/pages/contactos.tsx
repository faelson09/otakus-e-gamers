import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaTwitter } from "react-icons/fa"
import { CgPhone } from "react-icons/cg"

export default function Contact() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="flex justify-center mt-14">
                <div className="max-[2600px]:w-full w-[2600px] relative flex flex-col items-center overflow-hidden ">
                    <div className="w-[86%] flex flex-wrap justify-between">
                        <div className="w-[40%] flex flex-col">
                            <Image width={100} height={100} className="min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-12 bg-[#F5F3DA] rounded-full p-1" src="/assets/woman.png" alt="" />
                            <p className="mt-5 text-4xl font-medium">Vamos colaborar</p>
                            <p className="mt-5 text-[#777777] text-base">Lorem Ipsum is simply dummy text of the printing .</p>
                        </div>
                        <Image width={600} height={600} className="w-[50%]" src={"/assets/mapa.png"} alt="" />
                        <div className="w-full flex items-stretch h-20 my-5 max-sm:h-fit max-sm:flex-col max-sm:items-center" >
                            <div className='w-[32%] max-sm:w-[70%]'>
                                <span className="my-3">seguir</span>
                                <ul className='flex justify-between items-end w-[70%] max-sm:w-full'>
                                    <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={"https://facebook.com/andorinha.co.ao"}><FaFacebookF /></Link></li>
                                    <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={""}><FaInstagram /></Link></li>
                                    <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={""}><FaTwitter /></Link></li>
                                    <li className='rounded-full min-h-[40px] min-w-[40px] shadow-lg'><Link className='w-full h-[40px] flex items-center justify-center' target='_blank' href={"https://instagram.com/andorinha.ao/"}><FaLinkedinIn /></Link></li>
                                </ul>
                            </div>
                            <div className='flex items-center justify-center w-[32%] max-sm:w-[70%] max-sm:mt-10 border-x-[1px] border-[#C2C2C2]'>
                                <Link href="tel:+244900000" className="flex items-center"><CgPhone className="text-xl" /><span className="ml-2 text-[#333333] text-lg">+244 900 000</span></Link>
                            </div>
                            <div className='flex items-center justify-center w-[32%] max-sm:w-[70%] max-sm:mt-4'><FaMapMarkerAlt /><span className="ml-2 text-[#333333] text-lg">Rua Marechal Brás</span></div>
                        </div>
                    </div>
                    <div className="w-full bg-andorinha/10 flex flex-col items-center justify-center mt-16 py-14">
                        <h1 className="text-center text-3xl">Diga olá</h1>
                        <h2 className="text-center text-sm  text-[#777777] mt-2">Lorem Ipsum is simply dummy text of the printing .</h2>
                        <form className="w-[45%] max-sm:w-[90%]">
                            <div className="flex flex-col items-center mt-20">
                                <div className="flex justify-between w-full">
                                    <div className="w-[46%]">
                                        <label className="text-sm ml-1 text-[#4F4F4F]" htmlFor="name">Primeiro nome</label>
                                        <input className="w-full p-3 text-sm rounded-[8px]" id="name" type="text" />
                                    </div>
                                    <div className="w-[46%]">
                                        <label className="text-sm ml-1 text-[#4F4F4F]" htmlFor="lastName">Último nome</label>
                                        <input className="w-full p-3 text-sm rounded-[8px]" id="lastName" type="text" />
                                    </div>
                                </div>
                                <div className="w-full mt-3">
                                    <label className="text-sm ml-1 text-[#4F4F4F]" htmlFor="email">Email</label>
                                    <input className="w-full p-3 text-sm rounded-[8px]" id="email" type="text" />
                                </div>
                                <div className="w-full mt-3">
                                    <label className="text-sm ml-1 text-[#4F4F4F]" htmlFor="message">Mensagem</label>
                                    <textarea className="w-full text-sm resize-none rounded-[8px] p-2 h-44" name="message" id="message" ></textarea>
                                </div>
                            </div>
                            <div className="w-full flex justify-end mt-6">
                                <button className="p-3 text-sm bg-andorinha rounded-[8px] text-white">Entre em contacto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Rodape style="mt-12" />
        </main>
    )
}