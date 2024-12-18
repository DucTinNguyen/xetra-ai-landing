import React from 'react'
import elementPlus from '@/icon/element-plus.svg'
import BtnCustom from '../button/btn-custom'
import ecosystem1 from '@/images/ecosystem1.png'
import ecosystem2 from '@/images/ecosystem2.png'
import Image from 'next/image'
const Ecosystem = () => {
  return (
    <main>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]'>
              <BtnCustom icon={elementPlus} title='Ecosystem Products' className='w-[194px] mx-auto h-[36px]' />
              <h2 className='text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4'>Design for seamless mass adoption</h2>
              <section className='flex items-center justify-center gap-6 mt-12'>
                  <div className='w-[548px] h-[484px] relative'>
                      <Image src={ecosystem1} alt='' fill />
                      <div className='relative p-12 font-inter text-white'>
                          <h5 className='text-2xl font-semibold'>Xetra AI assistant</h5>
                          <p className='text-[#D8D8D8] text-base font-normal mt-3 mb-6'>Build your dApps with personal AI assistant with all power of OpenAI and Xetra Engine</p>
                          <button className='px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]'>try now</button>
                      </div>
                  </div>
                  <div className='w-[548px] h-[484px] relative'>
                      <Image src={ecosystem2} alt='' fill />
                      <div className='relative p-12 font-inter text-white'>
                          <h5 className='text-2xl font-semibold'>Xetra App</h5>
                          <p className='text-[#D8D8D8] text-base font-normal mt-3 mb-6'>Build, monitor, manage and analyze your dApps in one place</p>
                          <button className='px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]'>Get Started</button>
                      </div>
                  </div>
              </section>
          </section>      
    </main>
  )
}

export default Ecosystem