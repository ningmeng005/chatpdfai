'use client'

import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Link from '../mdxcomponents/Link';
import MobileNav from './MobileNav';
import LangSwitch from '../langswitch';
import {motion} from 'framer-motion';
import Image from "next/image";

import { useEffect } from 'react';

import {useParams} from 'next/navigation'
import {LocaleTypes} from 'app/[locale]/i18n/settings'
import {useTranslation} from 'app/[locale]/i18n/client'


interface HeaderProps {
    action: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Header({ action }: HeaderProps) {
    const locale = useParams()?.locale as LocaleTypes
    const {t} = useTranslation(locale, 'header')

    useEffect(() => {
        StickyMenu();
    }, []);

    return (
        <>
            <header className="appie-header-area appie-header-4-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-5">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <Link href="/">
                                        <img src='/assets/images/logo-6.png' alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    <a className="login-btn" href="#">
                                        <i className="fal fa-user"></i> Login
                                    </a>
                                    <a className="main-btn ml-30" href="#">
                                        Get Started
                                    </a>
                                    <div
                                        onClick={action}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<header>*/}
            {/*    <div className="max-w-screen-xl w-full mx-auto px-[25px] md:px-4">*/}
            {/*        <div className="flex flex-row items-center py-[20px] md:py-[20px] leading-[25px] md:leading-0">*/}
            {/*            /!*  logo  *!/*/}
            {/*            <div>*/}
            {/*                <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <div className="mr-3">*/}
            {/*                            <Image*/}
            {/*                                src={siteMetadata.siteLogo}*/}
            {/*                                alt={`${siteMetadata.author}-logo`}*/}
            {/*                                width={100}*/}
            {/*                                height={22}*/}
            {/*                                className="h-[40px] w-auto"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                        <span className="hidden h-6 text-[25px] font-semibold sm:block">*/}
            {/*                        {siteMetadata.headerTitle}*/}
            {/*                    </span>*/}
            {/*                    </div>*/}
            {/*                </Link>*/}
            {/*            </div>*/}

            {/*            /!*  meus and language   *!/*/}
            {/*            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">*/}
            {/*                <div className="appie-header-main-menu">*/}
            {/*                    <ul>*/}
            {/*                        <li><a href="#">{t("home")}</a></li>*/}
            {/*                        <li>*/}
            {/*                            <a href="#">{t("other-tools")}<i className="fal fa-angle-down"></i></a>*/}
            {/*                            <ul className="sub-menu">*/}
            {/*                                <li><a href="/about-us">About</a></li>*/}
            {/*                                <li><a href="/about-us-another">About 2</a></li>*/}
            {/*                                <li><a href="/404">Error</a></li>*/}
            {/*                                <li><a href="/shops">Shops</a></li>*/}
            {/*                                <li><a href="/shops/shop-details">Shop details</a></li>*/}
            {/*                            </ul>*/}
            {/*                        </li>*/}
            {/*                        <li><a href="#">News <i className="fal fa-angle-down"></i></a>*/}
            {/*                            <ul className="sub-menu">*/}
            {/*                                <li><a href="/news">News Page</a></li>*/}
            {/*                                <li><a href="/news/single-news">Single News</a></li>*/}
            {/*                            </ul>*/}
            {/*                        </li>*/}
            {/*                        <li><a href="/contact">Contact</a></li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                /!*<LangSwitch/>*!/*/}
            {/*                /!*<MobileNav/>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
        </>
    )
}
