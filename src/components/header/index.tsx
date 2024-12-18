'use client'
import logo from '@/icon/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {


    const menuItems = [
        {
            id: 'about',
            title: 'About'
        },
        {
            id: 'features',
            title: 'Features'
        },
        {
            id: 'products',
            title: 'Products'
        },
        {
            id: 'resources',
            title: 'Resources'
        },
        {
            id: 'why-xetra',
            title: 'Why Xetra'
        }
    ];

    const [active, setActive] = useState(menuItems[0])
    const router = useRouter();
    const handleActiveTab = (item: {id: string, title: string}) => {
        setActive(item)
    }

    useEffect(() => {
        setActive(menuItems[0])
        router.push('')
    },[])

  return (
      <main className='h-[76px] py-5'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto flex items-center justify-between'>
              <figure>
                  <Image src={logo} alt='logo' priority/>
              </figure>
              <section className='px-3 py-1 flex items-center gap-3 border border-[#F5F5F7] rounded-lg'>
                  {menuItems.map((item, index) => {
                      return <div onClick={()=>{handleActiveTab(item)}} key={index} className='flex items-center gap-3'>
                          <Link href={`#${item.id}`} className={`${item.title === active.title ? 'text-[#FF6600]' : 'text-[#666666]'} px-3 py-2 hover:text-[#FF6600]  text-sm font-medium`}>{item.title}</Link>
                          {index !== menuItems.length - 1 && <span className='inline-block w-[1px] h-6 bg-[#EAEAEA]'></span> }
                      </div>
                  })}
              </section>
              <button className='p-[2px] rounded-lg w-[134px] h-[36px] bg-launch-app'>
                  <span className='bg-[#0E121B] flex items-center justify-center h-full text-sm font-semibold font-inter rounded-lg text-white'>Launch App</span>
              </button>
              
          </section>
    </main>
  )
}

export default Header