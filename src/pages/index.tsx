import * as React from 'react';

import Header from 'components/section/Header';
import HeaderMobileNav from 'components/section/Header/HeaderMobileNav';
import Home from 'components/section/Home';
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
                <Home />
            </main>
            <HeaderMobileNav />
        </div>
    );
};

export default App;
