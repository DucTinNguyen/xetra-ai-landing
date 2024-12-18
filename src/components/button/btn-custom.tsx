import Image from 'next/image'
import React from 'react'

const BtnCustom = ({icon, title, className}: {icon: string, title: string, className: string}) => {
  return (
      <section className={`${className} p-[1px] bg-btn-custom rounded-full cursor-pointer`}>
          <div className='flex items-center justify-center gap-2 h-full bg-bg-custom rounded-full'>
              <Image src={icon} alt='icon' />
              <span className='text-sm font-semibold font-chakra_petch text-btn-custom'>{title}</span>
          </div>
    </section>
  )
}

export default BtnCustom