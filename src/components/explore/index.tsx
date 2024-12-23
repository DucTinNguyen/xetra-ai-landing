'use client'
import React, { useState } from 'react'
import BtnGradient from '../button/btn-gradient'
import BtnNormal from '../button/btn-normal'
import explore from '@/images/explore.svg'
import exploreMb from '@/images/explore-mobile.svg'
import explore1 from '@/images/explore1.png'
import explore2 from '@/images/explore2.png'
import explore3 from '@/images/explore3.png'
import Image from 'next/image'
import Link from 'next/link'
const Explore = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const getTransformClass = (index: number) => {
        if (hoveredCard === null) return '';
        return hoveredCard === index ? 'lg:-translate-y-[50px]' : 'lg:translate-y-[50px]';
    };
    const cards = [
        {
            image: explore1,
            shadow: '0px 0px 48px 0px rgba(255, 48, 110, 0.20)',
            border: 'border-[rgba(255,48,110,0.10)]',
            title: (
                <p className='font-inter text-base font-semibold mt-8 mb-2'>
                    <span className='text-[#FF306E]'>300+ logic blocks </span>
                    <span className='text-[#0E121B]'>for your dApps</span>
                </p>
            ),
            description: 'Power your dApps with 300+ logic blocks, speeding up development without complex coding.'
        },
        {
            image: explore2,
            shadow: '0px 0px 48px 0px rgba(255, 134, 48, 0.20)',
            border: 'border-[rgba(241,215,137,0.24)]',
            title: (
                <p className='font-inter text-base font-semibold mt-8 mb-2'>
                    <span className='text-[#0E121B]'>Build faster with</span>
                    <span className='text-[#FF8447]'> AI assistant </span>
                </p>
            ),
            description: 'Let the AI build your project, turning your ideas into reality at lightning speed with zero effort required.'
        },
        {
            image: explore3,
            shadow: '0px 0px 48px 0px rgba(59, 48, 255, 0.16)',
            border: 'border-[rgba(168,147,253,0.12)]',
            title: (
                <p className='font-inter text-base font-semibold mt-8 mb-2'>
                    <span className='text-[#0E121B]'>Tap into community-built</span>
                    <span className='text-[#7D52F4]'> templates</span>
                </p>
            ),
            description: 'Unlock endless possibilities by using Xetra AI ready-made templates, speeding up your development.'
        }
    ];
  return (
      <main className='my-[100px]'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6 lg:h-[1072px]'>
              <div className='w-full lg:h-[702px] bg-explore rounded-[32px] pt-12 px-4 lg:px-0'>
                  <h2 className='text-[#0E121B] text-[32px] lg:text-[40px] font-semibold text-start lg:text-center'>No-Code, AI-Powered dApp Builder</h2>
                  <p className='text-base text-[#666] font-inter w-full lg:w-[658px] mx-auto text-start lg:text-center my-4'>Create dApps with ease using a no-code node editor and Xetra AI chat - shape your app logic for bots, trades, and token deployment in minute without writing a single line of code.</p>
                  <div className='flex items-center justify-start lg:justify-center gap-3 mb-12'>
                      <BtnGradient title='Start Building' className='w-[123px]' />
                      <Link href={'https://dapp.xetra.io/?type=store'} target='_blank' className={`w-[169px] bg-get-started group border border-[#09090B/80%] rounded-lg h-[36px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]`}>
                          <span className='w-full h-full group-hover:bg-black group-hover:text-white transition-all ease-linear duration-100  bg-white font-medium text-sm rounded-lg font-inter flex items-center justify-center'>Explore Marketplace</span>
                      </Link>
                  </div>
                  <Image src={explore} alt='explore' priority className='w-full hidden md:block' />
                  <Image src={explore} alt='explore' priority className='w-full block md:hidden' />

              </div>
              <section className='mt-20 lg:mt-0 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:absolute lg:bottom-0'>
                  {cards.map((card, index) => (
                      <div
                          key={index}
                          style={{
                              boxShadow: card.shadow
                          }}
                          className={`h-full border ${card.border} bg-[#fff] cursor-pointer rounded-[32px] p-8 transition-all ease-linear duration-150 ${getTransformClass(index)}`}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                      >
                          <Image src={card.image} alt='explore' className={index > 0 ? 'w-[350px]' : ''} />
                          {card.title}
                          <p className='text-sm font-inter text-[#666]'>{card.description}</p>
                      </div>
                  ))}
              </section>
          </section>
    </main>
  )
}

export default Explore