import React from 'react'
import logo from "@/icon/Logo.svg";
import icClose from '@/icon/close.svg'
import Image from 'next/image';
import Link from 'next/link';
import icArrow from '@/icon/ic-arrow.svg'
import BtnGradient from '../button/btn-gradient';
const SubMenu = ({isOpen, close}: {isOpen: boolean, close: ()=> void}) => {

    const menuItems = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "features",
            title: "Features",
        },
        {
            id: "products",
            title: "Products",
        },
        {
            id: "resources",
            title: "Resources",
        },
        {
            id: "why-xetra",
            title: "Why Xetra",
        },
    ];

    return (
        <main className={`${!isOpen ? 'w-0 opacity-0 invisible' : 'w-[90%] opacity-100 visible'} transition-all ease-linear duration-200 fixed top-0 left-0  h-full bg-[#FCFCFC] z-40`}>
            <section className='flex items-center justify-between py-8 px-4'>
                <Image src={logo} alt='logo' />
                <Image onClick={close} src={icClose} alt='logo' />
            </section>
            
            <section className=''>
                {menuItems.map((item, index) => {
                    return (
                        <div
                            onClick={() => {

                            }}
                            key={index}
                            className="flex items-center justify-between p-4 border-b-[1px] border-[#EAEAEA]"
                        >
                            <Link
                                href={`#${item.id}`}
                                className={`text-[#1B1B1B] font-semibold text-base`}
                            >
                                {item.title}
                            </Link>
                            <Image src={icArrow} alt='icon' />
                        </div>
                    );
                })}
            </section>
            <BtnGradient title="Launch App" className="w-[134px] h-[36px] mt-8 mx-4" />

        </main>
    )
}

export default SubMenu