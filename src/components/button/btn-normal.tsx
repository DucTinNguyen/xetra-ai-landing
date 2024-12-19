import React from 'react'

const BtnNormal = ({ title, className }: { title: string, className: string }) => {
  return (
      <button className={`${className} bg-get-started group border border-[#09090B/80%] rounded-lg w-[107px] h-[36px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]`}>
      <span className='w-full h-full group-hover:bg-black group-hover:text-white transition-all ease-linear duration-100  bg-white font-semibold text-sm rounded-lg font-inter flex items-center justify-center'>{title}</span>
      </button>
  )
}

export default BtnNormal