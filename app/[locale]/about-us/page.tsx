import {Metadata} from 'next'
import {genPageMetadata} from 'app/[locale]/seo'
import {createTranslation} from '../i18n/server'
import {LocaleTypes} from '../i18n/settings'

type ProjectsProps = {
    params: { locale: LocaleTypes }
}

export async function generateMetadata({params: {locale}}: ProjectsProps): Promise<Metadata> {
    const {t} = await createTranslation(locale, 'about-us')
    return genPageMetadata({
        title: t('title'),
        description: t('description'),
        params: {locale: locale},
    })
}

export default async function aboutus({params: {locale}}: ProjectsProps) {
    const {t} = await createTranslation(locale, 'about-us')
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {/*<div className="space-y-2 pb-8 pt-6 md:space-y-5">*/}
                {/*    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-heading-400 dark:text-heading-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
                {/*        {t('title')}*/}
                {/*    </h1>*/}
                {/*    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('description')}</p>*/}
                {/*</div>*/}
                <div className="container py-12">
                    <div className="flex flex-wrap">
                        about-us页面
                    </div>
                </div>
            </div>
        </>
    )
}
