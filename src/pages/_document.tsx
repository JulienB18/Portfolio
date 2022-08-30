import Document, { Html, Head, Main, NextScript } from 'next/document';

import { HomePageConfig } from 'data/AppConfig';

class MyDocument extends Document {
    render() {
        return (
            <Html lang={HomePageConfig.locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
