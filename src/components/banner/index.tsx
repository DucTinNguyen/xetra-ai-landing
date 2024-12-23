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
import Link from 'next/link'
const Banner = () => {

    const images = [ image,image1, image2, image3, image4]

    return (
        <main className='h-svh relative py-8'>
            <video
                className="absolute w-full top-0 left-0 h-full mx-auto object-cover mix-blend-multiply"
                src="videos/banner.mp4"
                typeof="video/mp4"
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
            ></video>
            <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto relative z-10'>
                <BtnCustom icon={space} title='Beta release' className='w-[142px] h-[36px] mx-auto relative z-10' />
                <div className='mt-20 px-4'>
                    <h2 className='text-[#0E121B] text-[40px] lg:text-[64px] font-normal leading-[46px] lg:leading-[84px] text-banner'>No Code. No Limits. <br /> Infinite Creativity.</h2>
                    <p className='w-full lg:w-[514px] mx-auto text-center text-base font-inter text-[#666] mt-3 mb-6'>Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain.</p>
                    <Link href={'https://dapp.xetra.io'} target='_blank' className='w-[344px] mx-auto flex items-center justify-center gap-4'>
                        <button className='px-6 py-3 bg-launch-app-1 border-[#FF6A001F] rounded-lg overflow-hidden text-[#FFFFFF] text-sm font-semibold'>Launch App</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Banner