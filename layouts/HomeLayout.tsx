import Link from '@/components/mdxcomponents/Link'
import Tag from '@/components/tag'
import siteMetadata from '@/data/siteMetadata'
import {formatDate} from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/newletter/NewsletterForm'
import {createTranslation} from '../app/[locale]/i18n/server'
import {LocaleTypes} from '../app/[locale]/i18n/settings'

interface Post {
    slug: string
    date: string
    title: string
    summary?: string | undefined
    tags: string[]
    language: string
    draft?: boolean
}

interface HomeProps {
    posts: Post[]
    params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 5

export default async function HomeLayout({posts, params: {locale}}: HomeProps) {
    const {t} = await createTranslation(locale, 'home')
    return (
        <>
            {/*  CatSection  */}
            <section className="md:py-[80px] bg-cover bg-center bg-[#a6a6a612]" style={{backgroundImage: 'url(/images/bg/CatSection-bg.png)'}}>
                <div className="max-w-screen-xl w-full mx-auto px-[30px] py-[40px] md:p-0">
                    <div className="mb-[10px] md:my-[0] max-w-3xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-block w-auto text-[13px] md:text-[14px] leading-5 tracking-wider text-[#ff7949] uppercase font-semibold">
                            {t("CatSection.subheading")}
                        </div>

                        <h2 className="max-w-[800px] text-[22px] md:text-[38px] text-[#494d6e] leading-[30px] md:leading-[45px] mt-[5px] md:mt-[10px] mb-[30px] text-center font-[700] capitalize">
                            {t("CatSection.heading")}
                        </h2>
                        <p className="max-w-[800px] text-[16px] md:text-[18px] text-[#607c90] leading-[22px] md:leading-[25px] text-center font-[400]">
                            {t("CatSection.paragraph")}
                        </p>
                        <div className="block md:inline-block mx-auto w-full md:w-auto mt-[40px] md:mt-[65px]">
                            <Link
                                href="/"
                                rel="nofollow"
                                target="_blank"
                                className="block md:inline-block text-[#ffffff] font-[500] md:font-bold px-[30px] md:px-[1.5rem] py-[8px] md:py-[0.7rem] w-full md:w-auto border border-1 border-solid border-[#ff7949] bg-[#ff7949] rounded-[0.25rem] capitalize">
                                {t("CatSection.button")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*<div className="divide-y divide-gray-200 dark:divide-gray-700">*/}
            {/*    <div className="space-y-2 pb-8 pt-6 md:space-y-5">*/}
            {/*        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-heading-400 dark:text-heading-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
            {/*            {t('greeting')}*/}
            {/*        </h1>*/}
            {/*        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('description')}</p>*/}
            {/*    </div>*/}
            {/*    <ul className="divide-y divide-gray-200 dark:divide-gray-700">*/}
            {/*        {!posts.length && t('noposts')}*/}
            {/*        {posts*/}
            {/*            .filter((p) => p.language === locale)*/}
            {/*            .slice(0, MAX_DISPLAY)*/}
            {/*            .map((post) => {*/}
            {/*                const {slug, date, title, summary, tags, language} = post*/}
            {/*                if (language === locale) {*/}
            {/*                    return (*/}
            {/*                        <li key={slug} className="py-12">*/}
            {/*                            <article>*/}
            {/*                                <div*/}
            {/*                                    className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">*/}
            {/*                                    <dl>*/}
            {/*                                        <dt className="sr-only">{t('pub')}</dt>*/}
            {/*                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">*/}
            {/*                                            <time dateTime={date}>{formatDate(date, locale)}</time>*/}
            {/*                                        </dd>*/}
            {/*                                    </dl>*/}
            {/*                                    <div className="space-y-5 xl:col-span-3">*/}
            {/*                                        <div className="space-y-6">*/}
            {/*                                            <div>*/}
            {/*                                                <div*/}
            {/*                                                    className="text-2xl font-bold leading-8 tracking-tight">*/}
            {/*                                                    <Link*/}
            {/*                                                        href={`/${locale}/blog/${slug}`}*/}
            {/*                                                        className="text-gray-900 dark:text-gray-100"*/}
            {/*                                                    >*/}
            {/*                                                        <h2>{title}</h2>*/}
            {/*                                                    </Link>*/}
            {/*                                                </div>*/}
            {/*                                                <ul className="flex flex-wrap">*/}
            {/*                                                    {tags.map((tag: string) => (*/}
            {/*                                                        <li key={tag}>*/}
            {/*                                                            <Tag text={tag}/>*/}
            {/*                                                        </li>*/}
            {/*                                                    ))}*/}
            {/*                                                </ul>*/}
            {/*                                            </div>*/}
            {/*                                            <div*/}
            {/*                                                className="prose max-w-none text-gray-500 dark:text-gray-400">*/}
            {/*                                                {summary!.length > 149 ? `${summary!.substring(0, 149)}...` : summary}*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="text-base font-medium leading-6">*/}
            {/*                                            <Link*/}
            {/*                                                href={`/${locale}/blog/${slug}`}*/}
            {/*                                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"*/}
            {/*                                                aria-label={`${t('more')}"${title}"`}*/}
            {/*                                            >*/}
            {/*                                                {t('more')} &rarr;*/}
            {/*                                            </Link>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </article>*/}
            {/*                        </li>*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            })}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*{posts.length > MAX_DISPLAY && (*/}
            {/*    <div className="flex justify-end text-base font-medium leading-6">*/}
            {/*        <Link*/}
            {/*            href={`/${locale}/blog`}*/}
            {/*            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"*/}
            {/*            aria-label={t('all')}*/}
            {/*        >*/}
            {/*            {t('all')} &rarr;*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*{siteMetadata.newsletter?.provider && (*/}
            {/*    <div className="flex items-center justify-center pt-4">*/}
            {/*        <NewsletterForm/>*/}
            {/*    </div>*/}
            {/*)}*/}
        </>
    )
}
