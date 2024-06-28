'use client'

import Link from "next/link";
import Image from "next/image";
import siteMetadata from '@/data/siteMetadata'
import {maintitle} from '@/data/localeMetadata'
import SocialIcon from '@/components/social-icons'

import {useParams} from 'next/navigation'
import {LocaleTypes} from 'app/[locale]/i18n/settings'
import {useTranslation} from 'app/[locale]/i18n/client'

interface footerlinks {
    label: React.ReactNode;
    path: string;
}

export default function Footer() {
    const locale = useParams()?.locale as LocaleTypes
    const {t} = useTranslation(locale, 'footer')

    const ProductslinksList: footerlinks[] = [
        {label: t("products-items1"), path: `/${locale}/pdf-chatbot`},
        {label: t("products-items2"), path: `/${locale}/use-cases`},
        {label: t("products-items3"), path: `/${locale}/blog`},
        {label: t("products-items4"), path: `/${locale}/pdf-compressor`},
        {label: t("products-items5"), path: `/${locale}/pdf-to-png`},
        {label: t("products-items6"), path: `/${locale}/pdf-merger`},
        {label: t("products-items7"), path: `/${locale}/more-pdf-tools`},
    ];

    const AboutlinksList: footerlinks[] = [
        {label: t("about-items1"), path: `/${locale}/about-us`},
        {label: t("about-items2"), path: `/${locale}/contact-us`},
        {label: t("about-items3"), path: `/${locale}/terms-and-conditions`},
        {label: t("about-items4"), path: `/${locale}/privacy-policy`},
    ];

    const ComparelinksList: footerlinks[] = [
        {label: t("compare-items1"), path: `/${locale}/chatpdfai-vs-chatpdf`},
        {label: t("compare-items2"), path: `/${locale}/chatpdfai-vs-pdfai`},
    ];

    return (
        <>
            <footer className="bg-[#020202]">
                <div className="max-w-screen-xl w-full mx-auto px-[25px] md:px-4 ">
                    <div className="flex flex-col md:flex-row py-[45px] md:py-[60px]">
                        {/*  logo and description  */}
                        <div className="flex-none w-[100%] md:w-[25%]">
                            <Link
                                href="/"
                                className="flex flex-row flex-wrap items-center mb-[20px]"
                            >

                                <Image
                                    src={siteMetadata.siteLogo}
                                    alt={`${siteMetadata.author}-logo`}
                                    width={100}
                                    height={22}
                                    className="h-[40px] w-auto mr-[10px]"
                                />
                                <span className="text-[#FFFFFF] text-[25px] font-bold">{siteMetadata.author}</span>
                            </Link>
                            <p className="max-w-[500px] text-[16px] text-[#A9A7B0] leading-[28px] mb-[20px]">
                                {t("text")}
                            </p>
                            <p className="max-w-[500px] text-[16px] text-[#A9A7B0] leading-[28px]">
                                {t("text2")}
                            </p>
                        </div>

                        {/*  Productslinks  */}
                        <div className="flex-initial w-[100%] md:w-[20%] ml-0 md:ml-[100px] mt-[45px] md:mt-0">
                            <h5 className="mb-[15px] md:mb-[25px] text-[#ffffff] text-[22px] leading-[32px] font-[600]">{t("products")}</h5>
                            <nav className="min-w-0 flex flex-row flex-wrap items-start justify-between gap-x-4 gap-y-2 font-normal">
                                {ProductslinksList.map((link) => (
                                    <Link
                                        className="text-[14px] text-[#A9A7B0] w-[47%] md:w-[100%] leading-[25px] hover:text-[#ff7949] hover:ml-[5px]"
                                        key={link.path}
                                        href={link.path}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/*  Aboutlinks  */}
                        <div className="flex-initial w-[100%] md:w-[20%] ml-0 md:ml-[100px] mt-[45px] md:mt-0">
                            <h5 className="mb-[15px] md:mb-[25px] text-[#ffffff] text-[22px] leading-[32px] font-[600]">{t("about")}</h5>
                            <nav className="min-w-0 flex flex-row flex-wrap items-start justify-between gap-x-4 gap-y-2 font-normal">
                                {AboutlinksList.map((link) => (
                                    <Link
                                        className="text-[14px] text-[#A9A7B0] w-[47%] md:w-[100%] leading-[25px] hover:text-[#ff7949] hover:ml-[5px]"
                                        key={link.path}
                                        href={link.path}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/*  Comparelinks  */}
                        <div className="flex-initial w-[100%] md:w-[20%] ml-0 md:ml-[100px] mt-[45px] md:mt-0">
                            <h5 className="mb-[15px] md:mb-[25px] text-[#ffffff] text-[22px] leading-[32px] font-[600]">{t("compare")}</h5>
                            <nav className="min-w-0 flex flex-row flex-wrap items-start justify-between gap-x-4 gap-y-2 font-normal">
                                {ComparelinksList.map((link) => (
                                    <Link
                                        className="text-[14px] text-[#A9A7B0] w-[100%] md:w-[100%] leading-[25px] hover:text-[#ff7949] hover:ml-[5px] capitalize"
                                        key={link.path}
                                        href={link.path}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#161616] text-[14px] md:text-[15px] text-zinc-400 text-center">
                    <div className="max-w-screen-xl w-full mx-auto px-[25px] md:px-4">
                        <div className="py-[20px] md:py-[20px] leading-[25px] md:leading-0">
                            {t("copyright")} © {new Date().getFullYear()} {t("allright")}<Link href="/" className="text-[#ff7949]"> {siteMetadata.author}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
