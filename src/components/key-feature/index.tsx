import React from 'react'
import BtnCustom from '../button/btn-custom'
import key from '@/icon/key.svg'
import noCode from '@/icon/no-code.svg'
import integration from '@/icon/integration.svg'
import menozation from '@/icon/menozation.svg'
import Image from 'next/image'
import feature1 from '@/images/feature-1.svg'
import feature2 from '@/images/feature-2.png'
import feature3 from '@/images/feature-3.svg'
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
            title: 'Monetization'
        }
    ]

    const product = [
        {
            img: feature1,
            title: 'Create',
            des: 'Easily deploy AI dApps in 3 clicks – no code necessary and secured through censorship resistant AI infrastructure!'
        },
        {
            img: feature2,
            title: 'Deploy',
            des: 'Reach a global audience through our LoveAI app store, WhatsApp, and Telegram.'
        },
        {
            img: feature3,
            title: 'Monetize',
            des: 'Monetize your AI dApps and earn tokens based on user engagement.'
        }
    ]

  return (
    <main>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]'>
              <div className='flex justify-between items-center'>
                  <div className='w-[379px]'>
                      <BtnCustom icon={key} title='Key Features' className='w-[146px] h-[36px]' />
                      <p className='text-[40px] leading-[46px] text-[#0E121B] font-semibold tracking-[-0.8px] mt-4'>Your best choice for AI dApps home suite</p>
                  </div>
                  <div className='w-[567px]'>
                      <p className='text-[#666] font-inter text-sm font-normal'>Quickly create, deploy, and profit from AI applications without coding, while ensuring security and decentralization with blockchain integration.</p>
                      <ul className='flex mt-4 gap-3'>
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
              <div className='grid grid-cols-3 gap-6 mt-[60px]'>
                  {product.map((product, index) => { 
                      return <div key={index} className='rounded-[20px] border border-[#EAEAEA] bg-[#FAFAFA] pt-4'>
                          <figure className='flex justify-center'>
                              <Image src={product.img} alt='' />
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