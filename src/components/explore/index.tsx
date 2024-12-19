'use client'
import React, { useState } from 'react'
import BtnGradient from '../button/btn-gradient'
import BtnNormal from '../button/btn-normal'
import explore from '@/images/explore.svg'
import explore1 from '@/images/explore1.png'
import explore2 from '@/images/explore2.png'
import explore3 from '@/images/explore3.png'
import Image from 'next/image'
const Explore = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const getTransformClass = (index: number) => {
        if (hoveredCard === null) return '';
        return hoveredCard === index ? '-translate-y-[50px]' : 'translate-y-[50px]';
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
            description: 'Connect apps in node-editor. Setting up bots, executing trades, deploying tokens — all made easy and without coding with an AI assistant.'
        },
        {
            image: explore2,
            shadow: '0px 0px 48px 0px rgba(255, 134, 48, 0.20)',
            border: 'border-[rgba(241,215,137,0.24)]',
            title: (
                <p className='font-inter text-base font-semibold mt-8 mb-2'>
                    <span className='text-[#0E121B]'>Ask</span>
                    <span className='text-[#FF8447]'> AI assistant </span>
                    <span className='text-[#0E121B]'>to build lightning fast</span>
                </p>
            ),
            description: 'Create wallets in one click and manage its connections to your dApps. Automate the top up of primary contract balance for graphs executions.'
        },
        {
            image: explore3,
            shadow: '0px 0px 48px 0px rgba(59, 48, 255, 0.16)',
            border: 'border-[rgba(168,147,253,0.12)]',
            title: (
                <p className='font-inter text-base font-semibold mt-8 mb-2'>
                    <span className='text-[#0E121B]'>Use</span>
                    <span className='text-[#7D52F4]'> templates</span>
                    <span className='text-[#0E121B]'> made by our community</span>
                </p>
            ),
            description: 'Get real-time data about your dApp usage and manage your dApps executions.'
        }
    ];
  return (
      <main className='my-[100px]'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6 lg:h-[1072px]'>
              <div className='w-full h-[702px] bg-explore rounded-[32px] pt-12'>
                  <h2 className='text-[#0E121B] text-[40px] font-semibold text-center'>Build your dApps with no-code and AI</h2>
                  <p className='text-base text-[#666] font-inter w-[658px] mx-auto text-center my-4'>Create dApps in no-code node-editor. Use built-in AI chat to develop your future app logic:bots, trades, deploying tokens — all made easy and without coding.</p>
                  <div className='flex items-center justify-center gap-3 mb-12'>
                      <BtnGradient title='Start Building' className='w-[123px]' />
                      <BtnNormal title='Explore Marketplace' className='w-[169px]'/>
                  </div>
                  <figure>
                      <Image src={explore} alt='explore' priority/>
                  </figure>
              </div>
              <section className='grid grid-cols-3 gap-6 absolute bottom-0'>
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