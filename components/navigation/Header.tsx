'use client'

import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Link from '../mdxcomponents/Link';
import MobileNav from './MobileNav';
import LangSwitch from '../langswitch';
import {motion} from 'framer-motion';
import Image from "next/image";

import {useParams} from 'next/navigation'
import {LocaleTypes} from 'app/[locale]/i18n/settings'
import {useTranslation} from 'app/[locale]/i18n/client'

// interface headerlinks {
//     label: React.ReactNode;
//     path: string;
// }

const Header = () => {
    const locale = useParams()?.locale as LocaleTypes
    const {t} = useTranslation(locale, 'header')

    // const othertoolsList: headerlinks[] = [
    //     {label: t("products-items1"), path: `/${locale}/pdf-chatbot`},
    //     {label: t("products-items2"), path: `/${locale}/use-cases`},
    //     {label: t("products-items3"), path: `/${locale}/blog`},
    //     {label: t("products-items4"), path: `/${locale}/pdf-compressor`},
    //     {label: t("products-items5"), path: `/${locale}/pdf-to-png`},
    //     {label: t("products-items6"), path: `/${locale}/pdf-merger`},
    //     {label: t("products-items7"), path: `/${locale}/more-pdf-tools`},
    // ];

    return (
        <header>
            <div className="max-w-screen-xl w-full mx-auto px-[25px] md:px-4">
                <div className="flex flex-row items-center py-[20px] md:py-[20px] leading-[25px] md:leading-0">
                    {/*  logo  */}
                    <div>
                        <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <Image
                                        src={siteMetadata.siteLogo}
                                        alt={`${siteMetadata.author}-logo`}
                                        width={100}
                                        height={22}
                                        className="h-[40px] w-auto"
                                    />
                                </div>
                                <span className="hidden h-6 text-[25px] font-semibold sm:block">
                                    {siteMetadata.headerTitle}
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/*  meus and language   */}
                    <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                        <div className="appie-header-main-menu">
                            <ul>
                                <li><a href="#">{t("home")}</a></li>
                                <li>
                                    <a href="#">{t("other-tools")}<i className="fal fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/about-us">About</a></li>
                                        <li><a href="/about-us-another">About 2</a></li>
                                        <li><a href="/404">Error</a></li>
                                        <li><a href="/shops">Shops</a></li>
                                        <li><a href="/shops/shop-details">Shop details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">News <i className="fal fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/news">News Page</a></li>
                                        <li><a href="/news/single-news">Single News</a></li>
                                    </ul>
                                </li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>










                        {/*<nav className="flex items-center gap-[24px] mx-[40px]">*/}
                        {/*    <div><Link href="/" className="text-[18px] font-[500]">{t("home")}</Link></div>*/}
                        {/*    <div><Link href="/" className="">{t("other-tools")}</Link></div>*/}
                        {/*    <div><Link href="/" className="">{t("blog")}</Link></div>*/}
                        {/*    <div><Link href="/" className="">{t("about")}</Link></div>*/}



                            {/*<div className="item all-tools" onClick="slideToggleHeader(this)">*/}

                            {/*    <button id="allTools" className="tools-btn" type="button">*/}

                            {/*        <i class="icon">*/}
                            {/*            <svg class="svg-el">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconTools"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*        <span>Online Tools</span>*/}

                            {/*        <i className="icon-arrow">*/}
                            {/*            <svg className="svg-el">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconArrowDown"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*    </button>*/}

                            {/*    <div id="subMenu" className="sub-menu">*/}

                            {/*        <ul className="sub-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <Link key={link.title} href={`/${locale}${link.href}`} className="flex transform-gpu items-center space-x-1 transition-transform duration-300"></Link>*/}
                            {/*                <span className="title">AI Tools</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/chatpdf-ai/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                            {/*                             viewBox="0 0 24 24">*/}
                            {/*                            <path fill="url(#a)"*/}
                            {/*                                  d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"></path>*/}
                            {/*                            <path fill="#fff"*/}
                            {/*                                  d="M9.988 15.746H6.844l-.504 1.488H4.192L7.24 8.81h2.376l3.048 8.424h-2.172l-.504-1.488Zm-.528-1.584-1.044-3.084-1.032 3.084H9.46Zm6.184-5.352v8.424h-2.052V8.81h2.052ZM15.999 1l.875 2.042 2.042.875-2.042.875-.875 2.043-.875-2.042-2.042-.876 2.042-.875L15.999 1ZM18.732 5.302l.533 1.237 1.237.53-1.237.533-.53 1.237-.533-1.237-1.237-.533 1.237-.53.53-1.237Z"></path>*/}
                            {/*                            <linearGradient id="a" x1="1.5" x2="24" y1="0" y2="24"*/}
                            {/*                                            gradientUnits="userSpaceOnUse">*/}
                            {/*                                <stop stop-color="#0068DF"></stop>*/}
                            {/*                                <stop offset=".696" stop-color="#AA39E3"></stop>*/}
                            {/*                            </linearGradient>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Chat with PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*        <ul className="sub-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <span className="title">Organize &amp; Manage</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-merge/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavMerge"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Merge PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/compress-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavCompress"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Compress PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-converter/"*/}
                            {/*                   itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavConvert"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF Converter*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/split-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavSplit"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Split PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*        <ul className="sub-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <span className="title">View &amp; Edit</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-editor/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavEdit"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF Editor*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/resize-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavResize"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Resize PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-reader/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavReader"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF Reader*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/sign-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavEsing"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    E-Sign PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*        <ul className="sub-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <span className="title">Convert from PDF</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-to-word/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavWord"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF to Word*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-to-excel/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavExcel"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF to Excel*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-to-ppt/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavPpt"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF to PPT*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*        <ul className="sub-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <span className="title">Convert to PDF</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/word-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavWord"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Word to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/excel-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavExcel"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    Excel to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/ppt-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavPpt"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PPT to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/txt-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavTxt"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    TXT to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*        <ul className="sub-list last-list">*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <span className="title">Convert Image</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/png-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavImg"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PNG to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/jpg-to-pdf/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavImg"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    JPG to PDF*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item">*/}
                            {/*                <a className="link" href="https://www.sodapdf.com/pdf-to-jpg/" itemProp="url">*/}
                            {/*                    <i className="icon">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconNavImg"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                    PDF to JPG*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*            <li className="sub-item all-tools-item">*/}
                            {/*                <a className="all-link" href="https://www.sodapdf.com/pdf-tools/"*/}
                            {/*                   itemProp="url">*/}
                            {/*                    View all tools*/}
                            {/*                    <i className="arrow">*/}
                            {/*                        <svg>*/}
                            {/*                            <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                                 xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconArrowLink"></use>*/}
                            {/*                        </svg>*/}
                            {/*                    </i>*/}
                            {/*                </a>*/}
                            {/*            </li>*/}

                            {/*        </ul>*/}

                            {/*    </div>*/}

                            {/*</div>*/}

                            {/*<div className="item">*/}

                            {/*    <a id="pricingHeader" className="nav-link" onClick="addParams()"*/}
                            {/*       onMouseDown="avqTools.getEvent('Buy')" js-visitor-tracking="buy"*/}
                            {/*       href="https://www.sodapdf.com/pricing/?uid=1015225&amp;cmp=spdf_all_direct_all_all_all_all&amp;key1=default&amp;key2=default&amp;mkey6=42759513-b9ca-311c-6862-58e4eca0011b_2024-06-26&amp;wid=1400&amp;mkey1=sodapdf.com&amp;qti=42759513-b9ca-311c-6862-58e4eca0011b_2024-06-26&amp;mkey4=46f5022c-dfec-464a-bbb9-4bbe28dc41d2&amp;culture=en"*/}
                            {/*       itemProp="url"*/}
                            {/*       avqtools-outbound="uid, cmp, key1, key2, mkey5, mkey7, mkey6, mkey9, wid, mkey1, mkey2, qti, gtm, mkey4, visitorid, culture">*/}

                            {/*        <i className="icon">*/}
                            {/*            <svg>*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconPricing"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*        Pricing*/}
                            {/*    </a>*/}

                            {/*</div>*/}

                            {/*<div className="drop-item item" onClick="slideToggleHeader(this)">*/}

                            {/*    <div class="nav-link" onclick="openOnline(this)"*/}
                            {/*         href="https://www.sodapdf.com/business/">*/}

                            {/*        <i class="icon">*/}
                            {/*            <svg class="svg-el">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconBuisness"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*        <span>Business</span>*/}

                            {/*        <i class="icon-arrow">*/}
                            {/*            <svg class="svg-el">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconArrowDown"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}
                            {/*    </div>*/}

                            {/*    <div class="drop-down">*/}

                            {/*        <div class="drop-down-item">*/}

                            {/*            <a class="drop-link" href="https://www.sodapdf.com/business/solutions-for-it/"*/}
                            {/*               itemprop="url">*/}
                            {/*                Benefits for IT*/}
                            {/*            </a>*/}

                            {/*        </div>*/}

                            {/*        <div class="drop-down-item">*/}

                            {/*            <a class="drop-link" href="https://www.sodapdf.com/business/" itemprop="url">*/}
                            {/*                Volume Licensing*/}
                            {/*            </a>*/}

                            {/*        </div>*/}

                            {/*        <div class="drop-down-item">*/}

                            {/*            <a class="drop-link" href="https://www.sodapdf.com/resellers/" itemprop="url">*/}
                            {/*                Resellers*/}
                            {/*            </a>*/}

                            {/*        </div>*/}

                            {/*    </div>*/}

                            {/*</div>*/}

                            {/*<div class="item">*/}

                            {/*    <a class="nav-link" target="_blank" rel="noopener noreferrer"*/}
                            {/*       href="https://www.sodapdf.com/support/" itemprop="url">*/}

                            {/*        <i class="icon">*/}
                            {/*            <svg class="svg-el">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconSupport"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*        Support*/}

                            {/*    </a>*/}

                            {/*</div>*/}

                            {/*<div class="item item-mb">*/}

                            {/*    <button class="nav-link search--control" itemprop="url">*/}

                            {/*        <i class="icon">*/}
                            {/*            <svg class="svg-le">*/}
                            {/*                <use xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                     xlink:href="/soda-lp-static/dist/images/svg-vector/symbol-defs.svg#IconSearch"></use>*/}
                            {/*            </svg>*/}
                            {/*        </i>*/}

                            {/*        Search*/}

                            {/*    </button>*/}

                            {/*</div>*/}

                        {/*</nav>*/}
                        {/*<LangSwitch/>*/}
                        {/*<MobileNav/>*/}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
