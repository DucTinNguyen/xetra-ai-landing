import React from 'react'

const BtnGradient = ({title, className } :{title: string, className: string}) => {
  return (
      <button className={`${className} p-[2px] rounded-lg h-[36px] bg-launch-app group`}>
          <span className='bg-[#0E121B] group-hover:bg-[#fff] group-hover:text-black transition-all ease-linear duration-100 flex items-center justify-center h-full text-sm font-semibold font-inter rounded-lg text-white'>{title}</span>
      </button>
  )
}

export default BtnGradient