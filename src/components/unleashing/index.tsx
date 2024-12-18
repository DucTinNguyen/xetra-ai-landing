import React from 'react'
import message from '@/icon/message-question.svg'
import BtnCustom from '../button/btn-custom'
import svg from '@/images/SVG.png'
import Image from 'next/image'
import personal from '@/icon/personal.svg'
import image from '@/icon/image.svg'
import api from '@/icon/api.svg'
import domain from '@/icon/domain.svg'
const Unleashing = () => {
    const menuItems = [
        {
            title: 'Personalized agents',
            icon: personal
        },
        {
            title: 'Image processing applications',
            icon: image
        },
        {
            title: 'API integrations into 3P UX output',
            icon: api
        },
        {
            title: 'Domain specific fine tuning',
            icon: domain
        }
    ];
    return (
        <main>
            <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]'>
                <BtnCustom icon={message} title='Why Xetra AI' className='w-[143px] mx-auto h-[36px]' />
                <h2 className='text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Unleashing an ecosystem of apps</h2>
                <p className='w-[611px] mx-auto text-center text-sm font-inter text-[#666]'>Discover AI dApps and workflows built by our community.Direct in our LoveAI app store and other platforms like Telegram and WhatsApp.</p>
                <section className='flex items-start justify-between mt-7'>
                    <div className='rounded-[24px] border border-[#EAEAEA] bg-[#FAFAFA] w-[700px]'>
                        <Image src={svg} alt='' />
                    </div>
                    <div className='w-[430px] border border-[#EAEAEA] bg-[#FAFAFA] py-8 px-12 rounded-[24px]'>
                        <h3 className='text-[#1B1B1B] font-semibold text-xl'>What can you build?</h3>
                        <p className='text-[#666666] text-sm font-normal'>In partnership with Questflows 3P APIs.</p>
                        <ul className='flex flex-col mt-8 gap-3'>
                            {menuItems.map((item, index) => {
                                return (
                                    <div key={index} className='bg-[rgba(255,102,0,0.05)] flex items-center gap-1 px-4 py-2 rounded-full border border-[rgba(255,102,0,0.16)]'>
                                        <Image src={item.icon} alt='icon' />
                                        <span className='text-sm font-chakra_petch text-[#FF6600] font-medium'>{item.title}</span>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Unleashing