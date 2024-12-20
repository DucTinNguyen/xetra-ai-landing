import React from 'react'
import message from '@/icon/message-question.svg'
import BtnCustom from '../button/btn-custom'
import svg from '@/images/SVG.png'
import Image from 'next/image'
import personal from '@/icon/personal.svg'
import image from '@/icon/image.svg'
import api from '@/icon/api.svg'
import domain from '@/icon/domain.svg'
import { motion } from "motion/react"
const Unleashing = () => {
    const menuItems = [
        {
            title: 'Customizable Agents',
            icon: personal
        },
        {
            title: 'Powered by Xetra AI APIs',
            icon: image
        },
        {
            title: 'Integrate APIs into Xetra AI UX Outputs',
            icon: api
        },
        {
            title: 'Tailored Fine-tuning for Your Needs',
            icon: domain
        }
    ];
    return (
        <main id='why-xetra'>
            <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]'>
                <BtnCustom icon={message} title='Why Xetra AI' className='w-[143px] mx-auto h-[36px]' />
                <h2 className='text-[32px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Releasing a New Era of AI dApps with Xetra AI</h2>
                <p className='w-full lg:w-[611px] mx-auto text-center text-sm font-inter text-[#666] px-4 lg:px-0'>Explore AI dApps and workflows created by our community, easily accessible through the Xetra AI App Store and platforms like Telegram and WhatsApp.</p>
                <section className='flex flex-col gap-5 lg:flex-row items-start justify-between mt-7 px-4 lg:px-0'>
                    <div className='rounded-[24px] border border-[#EAEAEA] bg-[#FAFAFA] w-full lg:w-[700px]'>
                        <Image src={svg} alt='' />
                    </div>
                    <div className='w-full lg:w-[430px] border border-[#EAEAEA] bg-[#FAFAFA] p-8 lg:py-8 lg:px-12 rounded-[24px]'>
                        <h3 className='text-[#1B1B1B] font-semibold text-xl'>What can you bring to life?</h3>
                        <p className='text-[#666666] text-sm font-normal'>Powered by Questflows 3P APIs.</p>
                        <ul className='flex flex-col mt-8 gap-3'>
                            {menuItems.map((item, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={
                                            {
                                                opacity: 0,
                                            }
                                        }
                                        whileInView={{
                                            opacity: 1,
                                        }}
                                        
                                        className='bg-[rgba(255,102,0,0.05)] flex items-center gap-1 px-4 py-2 rounded-full border border-[rgba(255,102,0,0.16)]'>
                                        <Image src={item.icon} alt='icon' />
                                        <span className='text-sm font-chakra_petch text-[#FF6600] font-medium'>{item.title}</span>
                                    </motion.div>
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