import React from 'react'
import Marquee from "react-fast-marquee";
import ic_setting from '@/icon/setting.svg'
import ic_setting_1 from '@/icon/setting-1.svg'
import Image from 'next/image';
import btTab from '@/icon/button-tabs.svg'
const Decentralize = () => {
    const text = [
        'Set Up Easily with No-Code and AI',
        'Run, Monitor, and Analyze Data in Real-Time',
        'Sync and Automate Logic Across Multiple Blockchains'
    ]
    return (
        <main id='resources' className='py-[100px]'>
            <main className='lg:h-[340px] w-full relative'>
                <div className='w-[99.99%] h-[44px] 2xl:h-[50px] bg-launch-app rotate-[-1.5deg] py-3 px-4 lg:px-[60px] absolute top-[-21px] 2xl:top-[-25px] left-0'>
                    <Marquee direction='right' className='overflow-hidden'>
                        {Array.from({ length: 20 }).map((_, index) => {
                            return <div key={index} className='flex items-center gap-5 mx-5'>
                                <Image src={ic_setting} alt='icon' />
                                <span className='text-clip text-sm font-semibold uppercase'>What we offer</span>
                            </div>
                        })}
                    </Marquee>
                </div>
                <div className='bg-[#1B1B1B] py-10 px-4 lg:px-0 lg:py-20 h-full'>
                    <div className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6 lg:h-[1072px]'>
                        <h2 className='text-[#F5F5F7] text-[32px] font-medium tracking-[-0.64px] mb-10 px-4 lg:px-0'>Decentralized Business Automation Across Blockchains</h2>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
                            {text.map((item, index) => {
                                return <div key={index} className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 px-4 lg:px-0'>
                                    <div>
                                        <Image src={btTab} alt='btn' />
                                        <p className='mt-4 text-[#AEAEAE] text-base font-normal font-inter'>{item}</p>
                                    </div>
                                    {index !== text.length - 1 && <span className='w-[1px] h-[72px] bg-[#D8D8D8] lg:inline-block mr-10 hidden'></span>}
                                    {index !== text.length - 1 && <span className='w-[140px] h-[1px] bg-[#D8D8D8] inline-block mr-10 lg:hidden'></span>}
                                </div>
                            })}
                        </div>

                    </div>
                </div>
                <div className='w-[99.99%] h-[44px] 2xl:h-[50px] bg-[#DDDDDD] rotate-[-1.5deg] py-3 px-4 lg:px-[60px] absolute bottom-[-21px] 2xl:bottom-[-25px] left-0'>
                    <Marquee className='absolute'>
                        {Array.from({ length: 20 }).map((_, index) => {
                            return <div key={index} className='flex items-center gap-5 mx-5'>
                                <Image src={ic_setting_1} alt='icon' />
                                <span className='text-[#666666] text-sm font-semibold uppercase'>What we offer</span>
                            </div>
                        })}
                    </Marquee>
                </div>
            </main>
        </main>
        
    )
}

export default Decentralize
