"use client";
import logo from "@/icon/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BtnGradient from "../button/btn-gradient";
import icHamburger from "@/icon/hambuger.svg";
import SubMenu from "./sub-menu";
const Header = () => {
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

    const [active, setActive] = useState(menuItems[0]);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleActiveTab = (item: { id: string; title: string }) => {
        setActive(item);
    };

    useEffect(() => {
        setActive(menuItems[0]);
        router.push("");
    }, []);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    }

    return (
        <>
            <main className="h-[76px] lg:py-5 relative z-10">
                <section className="w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto flex items-center justify-between p-4 lg:p-0">
                    <div className="flex items-center gap-3">
                        <Image onClick={open} src={icHamburger} alt="" className="block lg:hidden" />
                        <Image src={logo} alt="logo" priority />
                    </div>
                    <section className="px-3 py-1 hidden lg:flex items-center gap-3 border border-[#F5F5F7] rounded-lg">
                        {menuItems.map((item, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        handleActiveTab(item);
                                    }}
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Link
                                        href={`#${item.id}`}
                                        className={`${item.title === active.title
                                                ? "text-[#FF6600]"
                                                : "text-[#666666]"
                                            } px-3 py-2 hover:text-[#FF6600]  text-sm font-medium`}
                                    >
                                        {item.title}
                                    </Link>
                                    {index !== menuItems.length - 1 && (
                                        <span className="inline-block w-[1px] h-6 bg-[#EAEAEA]"></span>
                                    )}
                                </div>
                            );
                        })}
                    </section>
                    <BtnGradient title="Launch App" className="w-[134px] h-[36px]" />
                </section>
            </main>
            <div onClick={close} className={`${isOpen ? 'w-full h-full' : 'w-0'} overlay fixed top-0 left-0  bg-[rgba(0,0,0,0.8)] z-30`}></div>
            <SubMenu isOpen={isOpen} close={close} />
        </>
    );
};

export default Header;
