/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import hero from '@/images/hero.png'
import Image from 'next/image'
import BtnGradient from '../button/btn-gradient'
import BtnNormal from '../button/btn-normal'
import Link from 'next/link'
const EarnReward = () => {
  return (
      <main className='px-4 lg:px-0'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[40px]'>
              <div className='bg-launch-app w-full h-[320px] p-1 rounded-[32px]'>
                  <figure className='w-full h-full relative z-10 rounded-[32px] overflow-hidden'>
                      <Image src={hero} alt='' fill/>
                      <div className='relative flex items-center w-full h-full justify-center z-10'>
                          <div className='px-4 lg:px-0'>
                              <h4 className='text-[#1B1B1B] text-[24px] font-semibold text-center'>Build fast. Launch faster. Profit smarter.</h4>
                              <p className='w-full lg:w-[760px] text-sm text-center my-6'>Bring your visions to life with Xetra AI. Our powerful engine enables anyone, anywhere, at anytime to own their AI dApps without effort - no coding skills or borders holding you back.</p>
                              <div className='flex items-center justify-center gap-3'>
                                  <BtnGradient title='Get Started' className='w-[134px] h-[36px]' />
                                  <Link href={'https://t.me/XetraAI'} target='_blank' className={` bg-get-started group border border-[#09090B/80%] rounded-lg h-[36px] w-[107px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]`}>
                                      <span className='w-full h-full group-hover:bg-black group-hover:text-white transition-all ease-linear duration-100  bg-white font-medium text-sm rounded-lg font-inter flex items-center justify-center'>Contact us</span>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </figure>
              </div>
          </section>
    </main>
  )
}

export default EarnReward