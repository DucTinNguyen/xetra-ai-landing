/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import hero from '@/images/hero.png'
import Image from 'next/image'
const EarnReward = () => {
  return (
      <main>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[40px]'>
              <div className='bg-launch-app w-full h-[320px] p-1 rounded-[32px]'>
                  <figure className='w-full h-full relative z-10 rounded-[32px] overflow-hidden'>
                      <Image src={hero} alt='' fill/>
                      <div className='relative flex items-center w-full h-full justify-center z-10'>
                          <div>
                              <h4 className='text-[#1B1B1B] text-[24px] font-semibold text-center'>Design in minutes. Publish dApps in seconds. Earn rewards.</h4>
                              <p className='w-[760px] text-center my-6'>Turn your AI ideas into a real global apps. Xetra AI's engine makes it possible for anyone, anywhere to create and deploy AI dApps without coding knowledge or geographical restrictions.</p>
                              <div className='flex items-center justify-center gap-3'>
                                  <button className='p-[2px] rounded-lg w-[134px] h-[36px] bg-launch-app'>
                                      <span className='bg-[#0E121B] flex items-center justify-center h-full text-sm font-semibold font-inter rounded-lg text-white'>Get Started</span>
                                  </button>
                                  <button className='bg-get-started rounded-lg w-[107px] h-[36px] p-[2px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]'>
                                      <span className='w-full h-full bg-white rounded-lg flex items-center justify-center'>Contact us</span>
                                  </button>
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