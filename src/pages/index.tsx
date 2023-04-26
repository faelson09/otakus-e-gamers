import Navbar from "@/components/Navbar";
import Pubs from "@/components/Pubs";
import Rodape from "@/components/Rodape";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      image: "/assets/phone.png",
      tilte: "Lorem Ipsum is simply dummy text of the printing. ",
      text: "ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS.",
    },
    {
      image: "/assets/phones.png",
      tilte: "Lorem Ipsum is simply dummy text of the printing.",
      text: "ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS.",
    },
    {
      image: "/assets/human.png",
      tilte: "Lorem Ipsum is simply dummy text of the printing. ",
      text: "ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS.",
    }]
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex justify-center mt-14 ">
        <div className="max-[2600px]:w-full w-[2600px] max-sm:w-full flex flex-col items-center max-[950px]:w-[80%] max-[800px]:w-[70%] ">
          <div className="flex flex-col items-center border-b-2 w-full ">
            <div className="flex items-stretch justify-between w-[88%] max-sm:flex-col max-sm:items-center max-sm:w-[99%]">
              <div className="w-[55%] max-sm:w-[65%] mt-3">
                <p className="text-3xl font-semibold leading-10 w-[450px] max-sm:w-full">Experienced <span className="text-andorinha">mobile and web</span> applications and website builders measuring.</p>
                <p className="mt-7 text-[15.5px] text-[#5C5C5C] leading-6">ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS. </p>
              </div>
              <svg className="max-sm:absolute max-sm:-z-10 max-sm:opacity-[0.2]" width="559" height="352" viewBox="0 0 639 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M562.872 328.696C531.64 257.624 523.928 218.232 483.576 110.456C456.28 37.5599 381.336 -7.8161 301.464 1.5279C266.776 5.5919 181.048 34.9679 156.76 117.816C142.04 167.96 122.296 210.584 112.472 242.648C59.576 415.608 0.696045 422.616 0.696045 422.616C0.696045 422.616 19.416 432.152 63.512 431.96C94.36 431.832 156.888 411.576 201.368 363.768C248.504 313.144 243.32 241.784 272.056 228.76C272.056 228.76 260.28 213.208 242.584 208.504C224.856 203.832 193.56 203.704 166.968 238.424C119.832 299.928 85.592 328.664 85.592 328.664C85.592 328.664 107.224 298.744 141.08 232.408C169.368 176.984 172.92 170.904 204.76 138.584C227 115.992 265.464 129.624 272.824 126.808C279.352 124.312 280.472 113.432 280.472 88.6959C280.472 58.9679 297.176 54.0399 302.84 44.2479C317.56 18.8399 336.248 11.6719 336.248 11.6719C336.248 11.6719 332.824 36.0559 337.56 46.0079C341.368 54.0079 360.152 57.1119 359.896 95.9599C359.736 121.272 366.2 126.552 370.424 127.256C402.744 132.792 407.032 111 448.984 148.696C478.136 174.872 506.616 255.704 545.144 312.92C552.76 322.84 556.472 328.632 556.472 328.632C552.6 323.672 548.824 318.392 545.144 312.92C530.264 293.528 500.536 258.232 454.552 219.032C413.784 184.28 367.96 227.416 369.496 228.568C409.752 258.808 390.392 314.968 451.544 373.432C540.024 458.04 639.032 422.552 639.032 422.552C639.032 422.552 599.32 411.576 562.872 328.696Z" fill="url(#paint0_linear_0_475)" />
                <defs>
                  <linearGradient id="paint0_linear_0_475" x1="319.864" y1="0.313721" x2="319.864" y2="431.963" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF163F" />
                    <stop offset="1" stopColor="#FF163F" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg width="47" height="431" viewBox="0 0 47 531" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[0px] mt-20">
                <path d="M16.7283 186.353C40.6069 228.272 19.7551 282.23 45.6957 347.368C53.0404 365.811 56.5381 376.626 66.8342 393.597C116.83 476.003 189.595 521.937 285.656 529.148C352.27 534.148 431.191 533.543 460.244 467.249C489.603 400.257 473.972 315.214 423.839 241.2C368.644 159.713 320.481 102.416 231.244 45.3169C183.487 14.7592 88.0571 -27.7495 33.1692 24.9451C-8.61798 65.0625 -7.15036 144.434 16.7283 186.353Z" fill="#FE3758" />
              </svg>
            </div>
            <div className="flex items-center justify-between w-[88%] mt-20 mb-6 max-sm:flex-col">
              <svg className="absolute left-[-1px] mt-[-170px]" width="35" height="410" viewBox="0 0 55 610" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-391.591 0.394742C-445.452 -1.33151 -477.316 35.6128 -501.572 83.7334C-545.833 171.537 -560.967 276.494 -546.418 365.852C-531.868 455.21 -479.047 517.336 -426.364 554.563C-346.508 610.991 -325.59 612.6 -247.5 607.018C-190.503 602.944 -159.808 595.565 -93.8058 561.844C-27.8039 528.123 76.4386 465.113 50.4221 374.546C29.8276 302.855 -112.879 282.313 -112.879 282.313C-112.879 282.313 -179.389 274.713 -219.359 243.749C-260.729 211.701 -286.937 128.037 -286.937 128.037C-286.937 128.037 -327.164 2.45965 -391.591 0.394742Z" fill="#252525" />
              </svg>

              <div className="max-sm:mt-2 max-sm:w-[80%] flex items-start">
                <div className="bg-[#EFEAFF] flex items-center justify-center h-[60px] w-[60px] overflow-hidden rounded-[17px]">
                  <Image width={29} height={29} className="w-[29px]" src="/assets/web.svg" alt="web image representation" />
                </div>
                <div className="mt-1 ml-3">
                  <p className="text-[#000000] text-sm font-medium">Aplicações Web</p>
                  <p className="text-[#969696] text-xs">Lorem Ipsum is simply</p>
                </div>
              </div>
              <div className="max-sm:mt-2 max-sm:w-[80%] flex items-start">
                <div className="bg-[#ECFFDA] flex items-center justify-center h-[60px] w-[60px] overflow-hidden rounded-[17px]">
                  <Image width={29} height={29} className="w-[26px]" src="/assets/tickets.svg" alt="marketing image representation" />
                </div>
                <div className="mt-1 ml-3">
                  <p className="text-[#000000] text-sm font-medium">Marketing Digital</p>
                  <p className="text-[#969696] text-xs">Lorem Ipsum is simply</p>
                </div>
              </div>
              <div className="max-sm:mt-2 max-sm:w-[80%] flex items-start">
                <div className="bg-[#DAE6FF] flex items-center justify-center h-[60px] w-[60px] overflow-hidden rounded-[17px]">
                  <Image width={29} height={29} className="w-[25px]" src="/assets/design.svg" alt="design image representation" />
                </div>
                <div className="mt-1 ml-3">
                  <p className="text-[#000000] text-sm font-medium">Design UI/UX</p>
                  <p className="text-[#969696] text-xs">Lorem Ipsum is simply</p>
                </div>
              </div>
              <div className="max-sm:mt-2 max-sm:w-[80%] flex items-start">
                <div className="bg-[#FFE5DA] flex items-center justify-center h-[60px] w-[60px] overflow-hidden rounded-[17px]">
                  <Image width={29} height={29} className="w-[16px]" src="/assets/mobile.svg" alt="phone image representation" />
                </div>
                <div className="mt-1 ml-3">
                  <p className="text-[#000000] text-sm font-medium">Mobile Applications</p>
                  <p className="text-[#969696] text-xs">Lorem Ipsum is simply</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[86%] flex flex-col items-center max-sm:w-[90%]">
            <h2 className="text-center mt-20 text-2xl font-semibold max-sm:w-[90%]">Lorem Ipsum is simply dummy text of the printing.</h2>
            <p className="text-center max-sm:w-[88%] w-[46%] text-sm mt-5 text-[#868686]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <div className="w-full mt-2 max-sm:ml-20 ">
              {/*<Image src="/assets/vector.svg" alt="" className="absolute top-[133px] ml-[-40px] w-[720px]" />*/}
              {items.map((item, index) => (
                <Pubs title={item.tilte} text={item.text} image={item.image} position={index + 1} key={index} all={items.length} />
              ))}
            </div>
            <div className="flex justify-between w-full mb-6 mt-36 h-fit max-sm:flex-col max-sm:items-center">
              <div className="p-8 bg-[#F4F4F4] w-[47%] flex flex-col justify-center items-center min-h-96 h-fit rounded-[20px] max-sm:w-[90%]">
                <p className="text-2xl font-semibold max-xl:w-full w-[65%] text-center mb-5">Lorem Ipsum is simply dummy text.</p>
                <p className="text-center mb-7 leading-7 text-base text-[#5C5C5C]">ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS. </p>
                <Link className="bg-andorinha text-white px-7 py-2 rounded-[10px]" href={""}>Ver mais</Link>
              </div>
              <div className="p-8 bg-andorinha w-[47%] flex flex-col justify-center items-center min-h-96 h-fit rounded-[20px] relative  max-sm:w-[90%] max-sm:mt-8">
                <Image width={144} height={150} src="/assets/bell.png" className="absolute top-[-70px] right-5 w-36 max-sm:-right-10 max-sm:top-[-50px]" alt="bell icon" />
                <p className="text-2xl text-[#FFFFFF] font-semibold max-xl:w-full w-[65%] text-center mb-5">Lorem Ipsum is simply dummy text.</p>
                <p className="text-center mb-7 leading-7 text-base text-[#FFFFFF]">ANDORINHA TECNOLOGIA é uma equipa de profissionais experientes  em aplicações móveis e web e construtores de sítios web com dezenas de projectos concluídos. Construímos e desenvolvemos aplicações móveis para várias plataformas de topo, incluindo Android e IOS. </p>
                <Link className="bg-white px-7 py-2 text-andorinha rounded-[10px]" href={""}>Ver mais</Link>
              </div>
              <svg className="absolute right-[-140px] -z-10" width="443" height="505" viewBox="0 0 443 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="248.5" cy="252.5" rx="248.5" ry="252.5" fill="url(#paint0_radial_0_450)" />
                <defs>
                  <radialGradient id="paint0_radial_0_450" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.5 252.5) rotate(77.9425) scale(375.791 369.837)">
                    <stop stopColor="#FFD9EB" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="mt-24 h-96 w-[96%] max-sm:w-[85%]">
              <svg className="absolute left-[-20px] -mt-20 -z-10" width="457" height="505" viewBox="0 0 457 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="208.5" cy="252.5" rx="248.5" ry="252.5" fill="url(#paint0_radial_0_400)" />
                <defs>
                  <radialGradient id="paint0_radial_0_400" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.5 252.5) rotate(77.9425) scale(375.791 369.837)">
                    <stop stopColor="#F3FFD9" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <p className="text-xl text-center font-medium">Nossos parceiros</p>
              <nav className="flex justify-between items-center">
                <Link target="_blank" className="max-[1500px]:w-[20%] max-[2000px]:w-[160px]  w-[200px]" href={""}><Image width={200} height={200} className="object-cover w-full" alt="" src="/assets/bene.png" /></Link>
                <Link target="_blank" className="max-[1500px]:w-[20%] max-[2000px]:w-[160px]  w-[200px]" href={""}><Image width={200} height={200} className="object-cover w-full" alt="" src="/assets/caspio.png" /></Link>
                <Link target="_blank" className="max-[1500px]:w-[20%] max-[2000px]:w-[160px]  w-[200px]" href={""}><Image width={200} height={200} className="object-cover w-full" alt="" src="/assets/hype.png" /></Link>
                <Link target="_blank" className="max-[1500px]:w-[20%] max-[2000px]:w-[160px]  w-[200px]" href={""}><Image width={200} height={200} className="object-cover w-full" alt="" src="/assets/leo.png" /></Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Rodape style="-mt-32" />
    </main>
  )
}
