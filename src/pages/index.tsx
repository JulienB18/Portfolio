import * as React from 'react';

import Header from 'components/section/Header';
import CustomHead from 'layout/Head';
import { AppConfig } from 'utils/AppConfig';

const App = () => {
    // const router = useRouter();
    /* <img src={`.${router.basePath}/assets/svg/logo.svg`} className="App-logo" alt="logo" /> */

    return (
        <div className="Portfolio">
            <CustomHead title={AppConfig.title} description={AppConfig.description} />
            <main>
                <Header />
            </main>
        </div>
    );
};

export default App;
