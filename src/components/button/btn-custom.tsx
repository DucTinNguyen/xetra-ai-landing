import Image from 'next/image'
import React from 'react'

const BtnCustom = ({ icon, title, className }: { icon: string, title: string, className: string }) => {
  return (
    <section className={`${className} p-[1px] rounded-full border border-[rgba(255,102,0,0.16)] bg-bg-custom cursor-pointer flex items-center justify-center gap-2`}>
      <Image src={icon} alt='icon' />
      <span className='text-sm font-semibold font-chakra_petch text-btn-custom'>{title}</span>
    </section>
  )
}

export default BtnCustom