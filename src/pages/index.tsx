import { Inter } from 'next/font/google'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const bests = [
    {
      nome: "naruto",
      descricao: "Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.",
      url_da_image: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/c8b7d39a00d62c26f4ec2f8fc9986cda.jpg"
    },
    {
      nome: "tenseey shitara slime",
      descricao: "Tensei Shitara Slime Datta Ken também conhecido como TenSura ou Slime Isekai é uma série de light novels de fantasia japonesa escrita por Fuse e ilustrada por Mitz Vah. Ele foi serializado online entre 2013 e 2016 no site de publicação de light novels Shōsetsuka ni Narō.",
      url_da_image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDgwMDE3Mzc0MzI0MDcy/animes-like-tensei-shitara-slime-datta-ken.webp"
    },
    {
      nome: "boku no pico",
      descricao: "Boku no Pico é uma série de OVA dos gêneros shotacon e hentai, composta por apenas três episódios dirigidos por Yatabe, Katsuyoshi. O produtor descreveu-o como 'o primeiro anime shotacon do mundo'.",
      url_da_image: "https://cdn.myanimelist.net/images/anime/12/39497l.jpg"
    },
    {
      nome: "7 seeds",
      descricao: "7 Seeds é uma série de mangá japonesa escrita e ilustrada por Yumi Tamura. É ambientado em um futuro pós-apocalíptico, tempo suficiente depois que um meteorito atinge a Terra para que novas espécies",
      url_da_image: "https://1.bp.blogspot.com/-RqCLFP_bwXo/XpzuP2EX_6I/AAAAAAAABVs/8c-fktQdmEs-PQnWOt_ObLBZ0VabsUEMwCLcBGAsYHQ/s1600/7-Seeds-anime.jpg"
    },
    {
      nome: "dota blood of zeus",
      descricao: "loa khj i uidsiun vui hid9dh9 d98dhidu",
      url_da_image: "https://rare-gallery.com/mocahbig/1310137-Heron-Blood-of-Zeus-Hera-Blood-of-Zeus-Hermes.jpg"
    },
  ]
  return (
    <main className="min-h-screen flex flex-col">
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
          {bests.map((best, index) => (
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
          ))}
        </Splide>
      </div>
      <div>ola</div>
    </main>
  )
}

