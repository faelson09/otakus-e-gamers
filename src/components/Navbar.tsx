import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"

function Navbar() {
    const router = useRouter()
    const [viwMenu, setViwMenu] = useState(false)
    return (
        <nav id="navbar" className={`w-full border-b-[1px] border-[#c4c4c4] h-16 flex items-center justify-center bg-white max-sm:relative`}>
            <div className="flex items-center justify-between px-3 max-[2600px]:w-full w-[2600px]">
                <h1>
                    <Link href={"/"} className="text-andorinha flex items-center text-xl">
                        <Image width={28} height={30} src="/icon.svg" className="w-7 mr-1" alt="" />Andorinha
                    </Link>
                </h1>
                <button className="bg-[red]/0 hidden items-center justify-center w-10 h-10 max-sm:flex" onClick={() => setViwMenu(!viwMenu)}><FiMenu className=" text-3xl" /></button>
                <div className={`flex justify-between items-center max-sm:${!viwMenu ? "hidden" : ""} max-sm:z-50  max-sm:flex-col max-sm:absolute max-sm:w-[160px] max-sm:right-2 max-sm:top-16 max-sm:items-start max-sm:bg-white max-sm:px-4 max-sm:py-3`}>
                    <Link className={`max-sm:p-2 max-sm:shadow-sm max-sm:w-full max-sm:mb-2 ${router.pathname == "/" ? "text-andorinha" : ""} mx-2`} href={"/"}>Inicio</Link>
                    <Link className={`max-sm:p-2 max-sm:shadow-sm max-sm:w-full max-sm:mb-2 ${router.pathname == "/sobre" ? "text-andorinha" : ""} mx-2`} href={""}>Sobre</Link>
                    <Link className={`max-sm:p-2 max-sm:shadow-sm max-sm:w-full max-sm:mb-2 ${router.pathname == "/seervicos" ? "text-andorinha" : ""} mx-2`} href={""}>Serviços</Link>
                    <Link className={`max-sm:p-2 max-sm:shadow-sm max-sm:w-full max-sm:mb-2 ${router.pathname == "/contactos" ? "text-andorinha" : ""} mx-2`} href={"contactos"}>Contacto</Link>
                    <div className="flex items-center justify-between">
                        <Link className="mx-1 hover:text-black/70 duration-200" target="_blank" href={"https://facebook.com/andorinha.co.ao"}><AiFillFacebook /></Link>
                        <Link className="mx-1 hover:text-black/70 duration-200" target="_blank" href={""}><AiFillTwitterSquare /></Link>
                        <Link className="mx-1 hover:text-black/70 duration-200" target="_blank" href={""}><AiFillLinkedin /></Link>
                        <Link className="mx-1 hover:text-black/70 duration-200" target="_blank" href={"https://instagram.com/andorinha.ao/"}><AiFillInstagram /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar