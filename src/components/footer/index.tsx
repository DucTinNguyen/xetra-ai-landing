import React from "react";
import logoFooter from "@/icon/logo-footer.svg";
import Image from "next/image";
import telegram from "@/icon/telegram.svg";
import github from "@/icon/github.svg";
import x from "@/icon/x.svg";
import dapp from "@/icon/dapp.svg";
interface FooterLink {
  href: string;
  label: string;
}
import Link from "next/link";

const Footer = () => {
  const chainLinks: FooterLink[] = [
    { href: "#about", label: "About Xetra" },
    { href: "#features", label: "Key Features" },
    {
      href: "#products",
      label: "Products",
    },
    {
      href: "#resources",
      label: "Resources",
    },
    { href: "#why-xetra", label: "Why Xetra AI" },
  ];

  const productLinks: FooterLink[] = [
    { href: "https://dapp.xetra.io", label: "AI Chat Bot" },
    { href: "https://dapp.xetra.io/?type=create", label: "No-code IDE" },
    { href: "https://dapp.xetra.io/?type=store&tag=All", label: "Marketplace" },
  ];

  const socialLinks = [
    { href: "https://t.me/XetraAI", label: "Telegram", icon: telegram },
    { href: "https://x.com/XetraAI", label: "X", icon: x },
    { href: "https://dapp.xetra.io/", label: "Dapp", icon: dapp },
    { href: "https://docs.xetra.io/", label: "Docs", icon: github },
  ];
  const infoLinks = [
    { href: "https://etherscan.io/address/0x0f48E776a4D983C0dDDF4C0c946D66e3786F134f", label: "Etherscan" },
    { href: "https://dexscreener.com/ethereum/0x465802f1d78a0af10f17d2acce5c9bef76aad885", label: "Dexscreener" },
    { href: "https://www.dextools.io/app/en/ether/pair-explorer/0x465802f1d78a0af10f17d2acce5c9bef76aad885?t=1735232319306", label: "Dextools" },
    { href: "https://app.uniswap.org/explore/tokens/ethereum/0x0f48e776a4d983c0dddf4c0c946d66e3786f134f", label: "Buy" },
  ];

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className="bg-[#1B1B1B] pt-10 mt-[100px]">
      <section className="w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6">
        <section className="flex flex-col gap-8 lg:flex-row px-4 lg:px-0 items-start justify-between">
          <div className="flex flex-col gap-3 px-4 lg:px-0 w-full lg:w-[320px]">
            <Image src={logoFooter} alt="logo" />
          </div>
          <div className="w-full lg:w-fit px-4 lg:px-0">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[120px] font-inter">
              {/* Our Chain Section */}
              <div>
                <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">
                  OUR CHAIN
                </h2>
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
                <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">
                  PRODUCTS
                </h2>
                <ul className="space-y-2">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Section */}
              <div>
                <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">
                  Info
                </h2>
                <ul className="space-y-2">
                  {infoLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target="_blank"
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
                <h2 className="text-[#666] font-semibold mb-2 text-sm font-chakra_petch">
                  FOLLOW US
                </h2>
                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8] flex items-center gap-[10px]"
                      >
                        <Image src={link.icon} alt="icon" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={backToTop}
              className="bg-white text-black px-4 py-2 rounded-lg font-inter text-sm font-semibold ml-auto block w-fit mt-6"
            >
              Back to top
            </button>
          </div>
        </section>
        <p className="py-4 text-center border-t-[1px] border-[#E1E4EA1A] mt-8 text-sm font-normal font-inter text-[#666]">
          ©️ 2024 Xetra AI. All Rights Reserved.
        </p>
      </section>
    </main>
  );
};

export default Footer;
