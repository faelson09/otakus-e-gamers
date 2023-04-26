import Image from 'next/image'
import React from 'react'

interface Postprops {
    title: string,
    text: string,
    image: string,
    position: number,
    all: number
}
function Pubs({ title, text, image, position, all }: Postprops) {
    let tit = title.split(" ")
    return (
        <div className={`flex w-full items-center justify-between mt-[100px] max-sm:mt-[60px] max-h-[416px] h-[416px] max-sm:max-h-fit max-sm:h-fit ${!String(position / 2).includes(".") && !String(position / 2).includes(",")  ? " max-sm:flex-wrap-reverse" : " max-sm:flex-wrap"}`}>
            {!String(position / 2).includes(".") && !String(position / 2).includes(",") ?
                (<>
                    <div className="w-[47%] pl-2   max-sm:w-full max-sm:items-center max-sm:flex max-sm:justify-center">
                        <svg className="absolute left-[-40px] -z-10" width="457" height="505" viewBox="0 0 457 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="208.5" cy="252.5" rx="248.5" ry="252.5" fill="url(#paint0_radial_0_400)" />
                            <defs>
                                <radialGradient id="paint0_radial_0_400" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.5 252.5) rotate(77.9425) scale(375.791 369.837)">
                                    <stop stopColor="#F3FFD9" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <Image className="min-h-full w-full" height={500} width={500} src={image} alt={text + "image"} />
                    </div>
                    <div className="pl-[50px] w-[53%]  max-sm:w-full  max-sm:pl-0">
                        <div className="flex items-start">
                            <div className="rounded-full bg-[#1090CB] flex items-center z-10 justify-center w-[32px] min-w-[32px] h-[32px]">
                                <Image src="/assets/happy.svg" alt="happy bear image" className="w-[20px]" width={20} height={20} />
                            </div>
                            <p className="ml-2 flex flex-col">
                                <span className="text-xs font-medium">Lorem Ipsum is simply dummy text</span>
                                <span className="text-[11px] text-[#868686]">Lorem Ipsum is simply dummy text</span>
                            </p>
                        </div>
                        <p className="text-xl font-semibold mt-6 leading-9  w-[300px]"><span className='text-andorinha'>{tit.slice(0, 2).join(" ")}</span> {tit.slice(2).join(" ")}</p>
                        <p className="mt-4 text-[13px] w-[90%] leading-6 text-[#5C5C5C]  max-sm:w-full">{text}</p>
                    </div>
                </>)
                :
                (<>
                    <div className={`pr-20 w-[47%] max-sm:w-full max-sm:border-none ${position <= 1 ? "border-r-[1px]" : ""}`}>
                        <div className="flex items-start">
                            <div className="rounded-full bg-[#08D3BB] flex items-center z-10 justify-center min-w-[32px] w-[32px] h-[32px]">
                                <Image src="/assets/happy.svg" alt="happy bear image" className="w-[20px]" width={20} height={20} />
                            </div>
                            <p className="ml-2 flex flex-col">
                                <span className="text-xs font-medium">Lorem Ipsum is simply dummy text</span>
                                <span className="text-[11px] text-[#868686]">Lorem Ipsum is simply dummy text</span>
                            </p>
                        </div>
                        <p className="text-xl font-semibold mt-6 leading-9  w-[300px]"><span className='text-andorinha'>{tit.slice(0, 2).join(" ")}</span> {tit.slice(2).join(" ")}</p>
                        <p className="mt-4 text-[13px] w-[90%] leading-6 text-[#5C5C5C] max-sm:w-full">{text}</p>
                    </div>
                    <div className="w-[53%] max-sm:w-full max-sm:items-center max-sm:flex max-sm:justify-center pl-2">
                        <svg className="absolute right-[-50px] w-[400px] -z-10" width="467" height="505" viewBox="0 0 467 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="248.5" cy="252.5" rx="248.5" ry="252.5" fill="url(#paint0_radial_0_301)" />
                            <defs>
                                <radialGradient id="paint0_radial_0_301" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.5 252.5) rotate(77.9425) scale(375.791 369.837)">
                                    <stop stopColor="#DED9FF" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <Image className="min-h-full w-full" height={450} width={500} src={image} alt={text + "image"} />
                    </div>
                </>)}
        </div>

    )
}

export default Pubs
