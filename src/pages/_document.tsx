import Document, { Html, Head, Main, NextScript } from 'next/document';

import Consent from 'components/Consent';
import { HomePageConfig } from 'data/AppConfig';

class MyDocument extends Document {
    render() {
        return (
            <Html lang={HomePageConfig.locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <Consent />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
