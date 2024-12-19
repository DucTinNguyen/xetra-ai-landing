import React from 'react'
import logoFooter from '@/icon/logo-footer.svg'
import Image from 'next/image'
import telegram from '@/icon/telegram.svg'
import github from '@/icon/github.svg'
import x from '@/icon/x.svg'
import medium from '@/icon/medium.svg'
interface FooterLink {
    href: string;
    label: string;
}
import { Github, Globe, MessagesSquare } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {


    const chainLinks: FooterLink[] = [
        { href: '/about', label: 'About Xetra' },
        { href: '/partners', label: 'Partners' },
        { href: '/features', label: 'Key Features' },
        { href: '/why-xetra', label: 'Why Xetra AI' },
    ];

    const productLinks: FooterLink[] = [
        { href: '/chat-bot', label: 'AI Chat Bot' },
        { href: '/ide', label: 'No-code IDE' },
        { href: '/marketplace', label: 'Marketplace' },
    ];

    const socialLinks = [
        { href: 'https://t.me/xetra', label: 'Telegram', icon: telegram },
        { href: 'https://x.com/xetra', label: 'X', icon: x },
        { href: 'https://medium.com/xetra', label: 'Medium', icon: medium },
        { href: 'https://github.com/xetra', label: 'GitHub', icon: github },
    ];

    const backToTop = () => {
        window.scrollTo(0, 0);
    }

  return (
      <main className='bg-[#1B1B1B] pt-10 mt-[100px]'>
          <section className='w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6'>
              <section className='flex items-start justify-between'>
                  <div className='flex flex-col gap-3 w-[320px]'>
                      <Image src={logoFooter} alt='logo' />
                      <p className='text-[#D8D8D8] text-lg font-medium'>Stay connected for the latest news</p>
                      <p className='text-sm text-[#AEAEAE] font-normal'>Join our newsletter to receive updates on new features and releases.</p>
                      <form className='rounded-[6px] overflow-hidden h-10 flex'>
                          <input type="email" placeholder='Enter your email' className='p-3 grow bg-[#F5F5F7] h-full border-none outline-none text-black placeholder:text-[#666] font-inter text-sm font-normal' />
                          <button className='py-[10px] h-full inline-block w-[91px] text-sm px-3 bg-[#FF6600] text-[#FFF1EB] font-inter font-medium'>Subscribe</button>
                      </form>
                      <p className='text-sm text-[#666] font-normal'>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company</p>
                  </div>
                  <div>
                      <div className='grid grid-cols-3 gap-[120px] font-inter'>
                          {/* Our Chain Section */}
                          <div>
                              <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">OUR CHAIN</h2>
                              <ul className="space-y-2">
                                  {chainLinks.map((link) => (
                                      <li key={link.label}>
                                          <Link
                                              href={link.href}
                                              className={`hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]`}
                                          >
                                              {link.label}
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          {/* Products Section */}
                          <div>
                              <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">PRODUCTS</h2>
                              <ul className="space-y-2">
                                  {productLinks.map((link) => (
                                      <li key={link.label}>
                                          <Link
                                              href={link.href}
                                              className="hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]"
                                          >
                                              {link.label}
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          {/* Follow Us Section */}
                          <div>
                              <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">FOLLOW US</h2>
                              <ul className="space-y-2">
                                  {socialLinks.map((link) => (
                                      <li key={link.label}>
                                          <Link
                                              href={link.href}
                                              className="hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8] flex items-center gap-[10px]"
                                          >
                                              <Image src={link.icon} alt='icon' />
                                              {link.label}
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                      <button onClick={backToTop} className='bg-white text-black px-4 py-2 rounded-lg font-inter text-sm font-semibold ml-auto block w-fit mt-6'>Back to top</button>
                  </div>
              </section>
              <p className='py-4 text-center border-t-[1px] border-[#E1E4EA1A] mt-8 text-sm font-normal font-inter text-[#666]'>
                  ©️ 2024 Xetra AI. All Rights Reserved. 
              </p>
          </section>
      </main>
  )
}

export default Footer