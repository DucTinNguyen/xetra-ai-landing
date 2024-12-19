import React from 'react'

const BtnGradient = ({title, className } :{title: string, className: string}) => {
  return (
      <button className={`${className} p-[2px] rounded-lg h-[36px] bg-launch-app`}>
          <span className='bg-[#0E121B] flex items-center justify-center h-full text-sm font-semibold font-inter rounded-lg text-white'>{title}</span>
      </button>
  )
}

export default BtnGradient