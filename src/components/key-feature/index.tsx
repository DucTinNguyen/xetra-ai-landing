import React from 'react'
import BtnCustom from '../button/btn-custom'
import key from '@/icon/key.svg'
import noCode from '@/icon/no-code.svg'
import integration from '@/icon/integration.svg'
import menozation from '@/icon/menozation.svg'
import Image from 'next/image'
import feature1 from '@/images/feature1.png'
import feature2 from '@/images/feature-2.png'
import feature3 from '@/images/feature3.png'
const KeyFeature = () => {


    const list = [
        {
            icon: noCode,
            title: 'No-Code Deployment'
        },
        {
            icon: integration,
            title: 'Blockchain Integration'
        },
        {
            icon: menozation,
            title: 'Profit'
        }
    ]

    const product = [
        {
            img: feature1,
            title: 'Build',
            des: 'Build powerful AI dApps in just 3 clicks – no coding needed, with rock-solid, censorship-resistant security!'
        },
        {
            img: feature2,
            title: 'Launch',
            des: 'Deploy and go live with your AI dApps in seconds, scaling across platforms with global reach and robust security.'
        },
        {
            img: feature3,
            title: 'Earn Money',
            des: 'Profit from your AI dApps by earning tokens from every user transaction.'
        }
    ]

  return (
      <main id='features'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]'>
              <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-0'>
                  <div className='w-full lg:w-[379px]'>
                      <BtnCustom icon={key} title='Key Features' className='w-[146px] h-[36px]' />
                      <p className='text-[32px] lg:text-[40px] leading-[32px] lg:leading-[46px] text-[#0E121B] font-semibold tracking-[-0.8px] mt-4'>The Perfect Home for Your AI dApps</p>
                  </div>
                  <div className='w-full lg:w-[567px] my-4 lg:my-0'>
                      <p className='text-[#666] font-inter text-sm font-normal'>Easily build, launch, and earn money from AI apps without coding, all while ensuring security and decentralisation through blockchain integration.</p>
                      <ul className='flex flex-wrap mt-4 gap-3'>
                          {list.map((item, index) => {
                              return (
                                  <div key={index} className='flex gap-1 px-4 py-2 rounded-full border border-[rgba(255,102,0,0.16)]'>
                                      <Image src={item.icon} alt='icon' />
                                      <span className='text-sm font-chakra_petch text-[#FF6600] font-medium'>{item.title}</span>
                                  </div>
                              )
                          })}
                        </ul>
                  </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px] px-4'>
                  {product.map((product, index) => { 
                      return <div key={index} className='rounded-[20px] border border-[#EAEAEA] bg-[#FAFAFA] pt-4'>
                          <figure className='flex justify-center h-[248px]'>
                              <Image src={product.img} alt='' objectFit='cover' objectPosition='center' />
                          </figure>
                          <div className='px-8 pb-8 mt-6'>
                              <p className='text-[#0E121B] text-lg font-semibold font-inter'>{product.title}</p>
                              <p className='text-[#666] text-base font-normal font-inter'>{product.des}</p>
                          </div>
                          
                      </div>
                  })}
              </div>
          </section>      
    </main>
  )
}

export default KeyFeature