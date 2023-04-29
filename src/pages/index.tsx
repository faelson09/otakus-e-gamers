import { Inter } from 'next/font/google'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import Navbar from '@/components/Navbar';
import Xarrow, { Xwrapper } from "react-xarrows";
import Link from 'next/link';
import Image from 'next/image';
import Post from '@/components/Post';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const company = [
    {
      name: "faelson09",
      length: 14,
      color: "#0041f5",
      image: "/images/faelson09.png"
    },
    {
      name: "otomes_sr",
      length: 7,
      color: "#3b2452",
      image: "/otmessr.png"
    },
    {
      name: "otakus & gamer",
      length: 4,
      color: "green",
      image: "/images/cog.jpg"
    },
    {
      name: "otakus e gamer",
      length: 4,
      color: "yellow",
      image: "/.png"
    },
    {
      name: "otakus e gamer",
      length: 4,
      color: "brown",
      image: "/.png"
    },
    {
      name: "otakus e gamer",
      length: 4,
      color: "grey",
      image: "/.png"
    },
  ]
  const posts = [
    {
      nome: "naruto",
      descricao: "Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.",
      url_da_image: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/c8b7d39a00d62c26f4ec2f8fc9986cda.jpg",
      isbest:true
    },
    {
      nome: "tenseey shitara slime",
      descricao: "Tensei Shitara Slime Datta Ken também conhecido como TenSura ou Slime Isekai é uma série de light novels de fantasia japonesa escrita por Fuse e ilustrada por Mitz Vah. Ele foi serializado online entre 2013 e 2016 no site de publicação de light novels Shōsetsuka ni Narō.",
      url_da_image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDgwMDE3Mzc0MzI0MDcy/animes-like-tensei-shitara-slime-datta-ken.webp",
      isbest:true
    },
    {
      nome: "boku no pico",
      descricao: "Boku no Pico é uma série de OVA dos gêneros shotacon e hentai, composta por apenas três episódios dirigidos por Yatabe, Katsuyoshi. O produtor descreveu-o como 'o primeiro anime shotacon do mundo'.",
      url_da_image: "https://cdn.myanimelist.net/images/anime/12/39497l.jpg",
      isbest:true
    },
    {
      nome: "7 seeds",
      descricao: "7 Seeds é uma série de mangá japonesa escrita e ilustrada por Yumi Tamura. É ambientado em um futuro pós-apocalíptico, tempo suficiente depois que um meteorito atinge a Terra para que novas espécies",
      url_da_image: "https://1.bp.blogspot.com/-RqCLFP_bwXo/XpzuP2EX_6I/AAAAAAAABVs/8c-fktQdmEs-PQnWOt_ObLBZ0VabsUEMwCLcBGAsYHQ/s1600/7-Seeds-anime.jpg",
      isbest:true
    },
    {
      nome: "dota blood of zeus",
      descricao: "loa khj i uidsiun vui hid9dh9 d98dhidu",
      url_da_image: "https://rare-gallery.com/mocahbig/1310137-Heron-Blood-of-Zeus-Hera-Blood-of-Zeus-Hermes.jpg",
      isbest:true
    },
    {
      nome: "naruto",
      descricao: "Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.",
      url_da_image: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/c8b7d39a00d62c26f4ec2f8fc9986cda.jpg",
      isbest:false
    },
    {
      nome: "tenseey shitara slime",
      descricao: "Tensei Shitara Slime Datta Ken também conhecido como TenSura ou Slime Isekai é uma série de light novels de fantasia japonesa escrita por Fuse e ilustrada por Mitz Vah. Ele foi serializado online entre 2013 e 2016 no site de publicação de light novels Shōsetsuka ni Narō.",
      url_da_image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDgwMDE3Mzc0MzI0MDcy/animes-like-tensei-shitara-slime-datta-ken.webp",
      isbest:false
    },
    {
      nome: "boku no pico",
      descricao: "Boku no Pico é uma série de OVA dos gêneros shotacon e hentai, composta por apenas três episódios dirigidos por Yatabe, Katsuyoshi. O produtor descreveu-o como 'o primeiro anime shotacon do mundo'.",
      url_da_image: "https://cdn.myanimelist.net/images/anime/12/39497l.jpg",
      isbest:false
    },
    {
      nome: "7 seeds",
      descricao: "7 Seeds é uma série de mangá japonesa escrita e ilustrada por Yumi Tamura. É ambientado em um futuro pós-apocalíptico, tempo suficiente depois que um meteorito atinge a Terra para que novas espécies",
      url_da_image: "https://1.bp.blogspot.com/-RqCLFP_bwXo/XpzuP2EX_6I/AAAAAAAABVs/8c-fktQdmEs-PQnWOt_ObLBZ0VabsUEMwCLcBGAsYHQ/s1600/7-Seeds-anime.jpg",
      isbest:false
    },
    {
      nome: "dota blood of zeus",
      descricao: "loa khj i uidsiun vui hid9dh9 d98dhidu",
      url_da_image: "https://rare-gallery.com/mocahbig/1310137-Heron-Blood-of-Zeus-Hera-Blood-of-Zeus-Hermes.jpg",
      isbest:false
    },

  ]
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center overflow-x-hidden">
        <div className='min-[1600px]:w-[1600px] flex flex-col items-center'>
          <div className='w-full' id='bests'>
            <Splide
              options={{
                rewind: true,
                gap: '1rem',
                autoplay: true,
                type: 'loop',
                pauseOnHover: false,
                resetProgress: false,
                height: '24rem',
                interval: 4000,
                speed: 1000,
                easing: 'ease'
              }}
              aria-label="Bests"
            >
              {posts.map((best, index) => best.isbest == true ? (
                <SplideSlide key={index}>
                  <div className='h-96 relative w-full' onClick={() => console.log("ola")}>
                    <img src={best.url_da_image} className='w-full h-full object-cover' alt="" />
                    <div className='absolute z-10 bottom-3 left-3 w-[350px] h-fit min-h-[144px] bg-black/20 p-5'>
                      <h1 className={`${inter.className} text-white capitalize text-3xl font-semibold mb-2 break-words`}>
                        {best.nome != null
                          ? best.nome.length > 30
                            ? best.nome.slice(0, 30) + "..."
                            : best.nome
                          : ""}</h1>
                      <p className='text-white capitalize text-sm leading-5 break-words'>{best.descricao != null
                        ? best.descricao.length > 130
                          ? best.descricao.slice(0, 130) + "..."
                          : best.descricao
                        : ""}</p>
                    </div>

                  </div>
                </SplideSlide>
              ) : "")}
            </Splide>
          </div>
          <div className='flex flex-col justify-center items-center w-[80%] h-fit'>
            <div className='w-[60%] flex justify-between items-center'>
              {company.map((comp, index) => (
                <div title={comp.name} key={`profile${index}`} id={`satrt${index}`} className='cursor-pointer w-[50px] h-[50px] bg-white rounded-full overflow-hidden'>
                  <Image src={`${comp.image}`} alt='d' width={500} height={500} className='object-cover w-full h-full' />
                  <Xarrow start={`satrt${index}`} end={`name${index}`} startAnchor={'bottom'} headSize={0} strokeWidth={1} endAnchor={'top'} color={comp.color} path='grid' curveness={1} dashness={{ nonStrokeLen: 3, strokeLen: 3 }} />
                </div>
              ))}
            </div>
            <div className='w-full flex justify-between items-center mt-6'>
              {company.map((comp, index) => (
                <div key={`name${index}`} id={`name${index}`} className={`text-white px-3 w-[145px] text-center py-[2px] rounded`} style={{ backgroundColor: comp.color }}>{comp.name}</div>
              ))}
            </div>
          </div>
          <div className='relative  my-6 w-full px-8 h-fit flex justify-between items-start'>
            <div className='bg-[#00000083] border-2 border-black w-[75%] h-fit flex items-start flex-wrap pt-4'>
              {posts.map((post) => (
                <Post data={post} />
              ))}

            </div>
            <div className='bg-[#00000083] w-[23%] h-fit p-2 border-2 border-black'>
              ola
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

