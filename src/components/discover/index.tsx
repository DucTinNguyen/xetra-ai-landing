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
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]'>
              <Image src={bgDiscover} alt='cover' fill />
              <section className='relative z-10'>
                  <BtnCustom icon={ufo} title='About Xetra' className='mx-auto w-[137px] h-[36px]' />
                  <h2 className='text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Discover Slinky Web3 AI Chain</h2>
                  <p className='text-base font-medium text-[#666] font-inter text-center'>Infrastructure to Ship Tokenized AI Apps Faster</p>
                  <section className='flex items-center gap-4 justify-center mt-12 font-inter'>
                      <div className='w-[512px]'>
                          <div className='bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px]'>
                              <p className='w-full'>
                                  <span className='block text-white text-xl font-semibold text-center'>EVM Compatible</span>
                                  <span className='block text-[#666666] text-sm font-normal text-center mt-3'>Leverage familiar tools to build, interact and scale!</span>
                              </p>
                          </div>
                          <figure className='relative w-full h-[432px] mt-4'>
                              <Image src={discover1} alt='discover' fill />
                              <div className='relative flex items-end h-full pb-6'>
                                  <div>
                                      <h5 className='block text-white text-xl font-semibold text-center'>Community Owned AI</h5>
                                      <p className='block text-[#666666] text-sm font-normal text-center mt-3'>Communities own and govern AI applications via utility tokensthat are tradable on Slinky Exchange</p>
                                  </div>
                              </div>
                          </figure>
                      </div>
                      <div className='w-[512px]'>
                          <figure className='relative w-full h-[432px] pt-6'>
                              <Image src={discover2} alt='discover' fill />
                              <div className='relative flex items-start h-full'>
                                  <div>
                                      <h5 className='block text-white text-xl font-semibold text-center'>Ridiculously Simple AI dApp Builder</h5>
                                      <p className='block text-[#666666] text-sm font-normal text-center mt-3'>Utilize Slinky AI dApp Templates to rapidly craft and launch sophisticated Web3 AI dApps</p>
                                  </div>
                              </div>
                          </figure>
                          <div className='bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px] mt-4'>
                              <p className='w-full'>
                                  <span className='block text-white text-xl font-semibold text-center'>Proof Of Engagement</span>
                                  <span className='block text-[#666666] text-sm font-normal text-center mt-3'>Each AI dApp features fair reward mechanisms that drive growth by incentivize valuable actions</span>
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