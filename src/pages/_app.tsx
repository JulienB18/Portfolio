import React from 'react';

import { getCookie } from 'cookies-next';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider } from 'react-redux';

import CustomLayout from 'layout/CustomLayout';
import store from 'store';

import 'styles/App.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const consent = getCookie('localConsent');

    return (
        <Provider store={store}>
            <Script
                id="gtag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
              
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5M7J62Q');`,
                }}
            />
            {consent === true && (
                <Script
                    id="consupd"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
                    }}
                />
            )}
            <CustomLayout>
                <Component {...pageProps} />
            </CustomLayout>
        </Provider>
    );
};

export default MyApp;
