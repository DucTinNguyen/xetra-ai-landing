import React from 'react'
import banner from '@/images/space.png'
import space from '@/icon/space.svg'
import BtnCustom from '../button/btn-custom'
import Image from 'next/image'
import user from '@/images/user.png'
import image from '@/images/image 33.svg'
import image1 from '@/images/image (1).svg'
import image2 from '@/images/image.svg'
import image3 from '@/images/image (2).svg'
import image4 from '@/images/image (3).svg'
const Banner = () => {

    const images = [ image,image1, image2, image3, image4]

    return (
        <main className='py-8'>
            <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto'>
                <div className=''>
                    <BtnCustom icon={space} title='Beta release' className='w-[142px] h-[36px] mx-auto relative z-10' />
                    <div className='h-[388px] max-w-full'>
                        <video
                            className="absolute w-full top-0 left-0 h-full mx-auto object-cover mix-blend-multiply"
                            src="videos/banner.webm"
                            typeof="video/mp4"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                        ></video>
                    </div>
                    <div>
                        <h2 className='text-[#0E121B] text-[64px] font-normal leading-[84px] text-banner'>Unleashing AI dApps for all</h2>
                        <p className='w-[514px] mx-auto text-center text-base font-inter text-[#666] mt-3 mb-6'>Create, deploy, and monetize AI dApps with our no-code app deployer,built on censorship-resistant blockchain infrastructure.</p>
                        <div className='w-[344px] mx-auto flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <Image src={user} alt='user' width={80} />
                                <p className='flex flex-col text-xs text-[#666] font-normal'>
                                    <span>Trusted by over</span>
                                    <span className='font-semibold'>28K+ people</span>
                                </p>
                            </div>
                            <button className='px-6 py-3 bg-launch-app-1 border-[#FF6A001F] rounded-lg overflow-hidden text-[#FFFFFF] text-sm font-semibold'>Launch App</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#666] text-base font-normal font-inter text-center mt-[112px] mb-8  '>Trusted by leading partners</p>
                    <div className='w-[620px] mx-auto py-3 px-6 bg-[rgba(255,102,0,0.05)] h-[64px] flex items-center gap-4 rounded-full border border-[#FF306E1A]'>
                        {images.map((item, index) => {
                            return <div key={index} className='flex items-center gap-4'>
                                <Image src={item} alt='item' />
                                {index !== images.length - 1 && <span className='inline-block w-[1px] h-[32px] bg-[#FF306E1A] mr-4'></span>}
                            </div>
                        })}
                    </div>
                </div>
                
            </section>
        </main>
    )
}

export default Banner