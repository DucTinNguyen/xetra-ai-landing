import React from 'react'
import bgCover from '@/images/bg-discover.png'
import Image from 'next/image'
import ufo from '@/icon/ufo.svg'
import BtnCustom from '../button/btn-custom'
import discover1 from '@/images/discover1.png'
import discover2 from '@/images/discover2.png'
import bgDiscover from '@/images/bgDiscover.png'
const Discover = () => {
  return (
      <main className='w-full lg:h-[918px] my-[60px]'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]'>
              <Image src={bgDiscover} alt='cover' fill />
              <section className='relative z-10'>
                  <BtnCustom icon={ufo} title='About Xetra' className='mx-auto w-[137px] h-[36px]' />
                  <h2 className='text-[32px] tracking-[-1px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Explore the Power of Xetra AI</h2>
                  <p className='text-sm lg:text-base font-medium text-[#666] font-inter text-center'>Accelerate Your AI Apps Launch, Saving Time - Maximizing Earnings</p>
                  <section className='flex flex-col lg:flex-row items-center gap-4 justify-center mt-12 font-inter px-4'>
                      <div className='w-full lg:w-[512px]'>
                          <div className='bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px]'>
                              <p className='w-full'>
                                  <span className='block text-white text-xl font-semibold text-center'>Fully EVM Compatible</span>
                                  <span className='block text-[#666666] text-sm font-normal text-center mt-3'>Power your AI dApps with integration and deployment across all EVM-compatible blockchains.</span>
                              </p>
                          </div>
                          <figure className='relative w-full h-[432px] mt-4'>
                              <Image src={discover1} alt='discover' fill />
                              <div className='relative flex items-end h-full pb-6 w-full'>
                                  <div className='w-full'>
                                      <h5 className='block text-white text-xl font-semibold text-center'>AI Owned by All</h5>
                                      <p className='block text-[#666666] text-sm font-normal text-center mt-3'>Enable communities to shape and control AI applications through utility tokens, fully tradable on the Xetra Exchange</p>
                                  </div>
                              </div>
                          </figure>
                      </div>
                      <div className='w-full lg:w-[512px]'>
                          <figure className='relative w-full h-[432px] pt-6'>
                              <Image src={discover2} alt='discover' fill />
                              <div className='relative flex items-start h-full w-full'>
                                  <div className='w-full'>
                                      <h5 className='block text-white text-xl font-semibold text-center'>Instant AI dApps Maker</h5>
                                      <p className='block text-[#666666] text-sm font-normal text-center mt-3'>Transform ideas into reality with ready-made Xetra AI templates - build and launch your AI dApps in no time.</p>
                                  </div>
                              </div>
                          </figure>
                          <div className='bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px] mt-4'>
                              <p className='w-full'>
                                  <span className='block text-white text-xl font-semibold text-center'>Proof Of Value</span>
                                  <span className='block text-[#666666] text-sm font-normal text-center mt-3'>Fuel growth with AI dApps that reward valuable contributions in a fair and transparent way.</span>
                              </p>
                          </div>
                          
                      </div>
                  </section>
              </section>
          </section>
    </main>
  )
}

export default Discover