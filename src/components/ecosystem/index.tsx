import React from 'react'
import elementPlus from '@/icon/element-plus.svg'
import BtnCustom from '../button/btn-custom'
import ecosystem1 from '@/images/ecosystem1.png'
import ecosystem2 from '@/images/ecosystem2.png'
import Image from 'next/image'
import Link from 'next/link'
const Ecosystem = () => {
  return (
      <main id='products'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]'>
              <BtnCustom icon={elementPlus} title='Ecosystem Products' className='w-[194px] mx-auto h-[36px]' />
              <h2 className='text-[32px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Design for seamless mass adoption</h2>
              <section className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-12 px-4 lg:px-0'>
                  <div className='w-full lg:w-[548px] h-[380px] lg:h-[484px] relative'>
                      <Image src={ecosystem1} alt='' fill />
                      <div className='relative p-8 lg:p-12 font-inter text-white'>
                          <h5 className='text-2xl font-semibold'>Xetra AI assistant</h5>
                          <p className='text-[#D8D8D8] text-base font-normal mt-3 mb-6'>Develop your dApps with a personal AI assistant, combining the power of OpenAI and Xetra Engine.</p>
                          <Link href={'https://dapp.xetra.io/?type=create'} target='_blank' className='px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]'>try now</Link>
                      </div>
                  </div>
                  <div className='w-full lg:w-[548px] h-[380px] lg:h-[484px] relative'>
                      <Image src={ecosystem2} alt='' fill />
                      <div className='relative p-8 lg:p-12 font-inter text-white'>
                          <h5 className='text-2xl font-semibold'>Xetra App</h5>
                          <p className='text-[#D8D8D8] text-base font-normal mt-3 mb-6'>Build track, and manage and perfect your AI dApps in one unified space.</p>
                          <Link href={'https://dapp.xetra.io/?type=my-apps'} target='_blank' className='px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]'>Get Started</Link>
                      </div>
                  </div>
              </section>
          </section>      
    </main>
  )
}

export default Ecosystem