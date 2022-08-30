import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { HomePageConfig } from 'data/AppConfig';

type ICustomHeadProps = {
    title: string;
    description: string;
    canonical?: string;
    noIndex: boolean;
};

const CustomHead = (props: ICustomHeadProps) => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                <link rel="apple-touch-icon" href={`/assets/icons/apple-touch-icon.png`} key="apple" />
                <link rel="icon" type="image/png" sizes="32x32" href={`/assets/icons/favicon-32x32.png`} key="icon32" />
                <link rel="icon" type="image/png" sizes="16x16" href={`/assets/icons/favicon-16x16.png`} key="icon16" />
                <link rel="icon" type="image/x-icon" href={`/favicon.ico`} key="favicon" />
                <meta name="author" content="Julien Boutet" />
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                noindex={props.noIndex}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: 'https://julienboutet.fr',
                    locale: HomePageConfig.locale,
                    site_name: HomePageConfig.site_name,
                    images: [
                        {
                            url: 'https://julienboutet.fr/assets/icons/favicon-32x32.png',
                            width: 32,
                            height: 32,
                            alt: 'Julien Boutet',
                        },
                    ],
                }}
                twitter={{
                    handle: '@JujuFun1',
                    site: '@JujuFun1',
                    cardType: 'summary',
                }}
                robotsProps={{
                    noimageindex: true,
                }}
            />
        </>
    );
};

export default CustomHead;
