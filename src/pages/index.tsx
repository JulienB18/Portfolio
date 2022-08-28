import * as React from 'react';

import Contact from 'components/section/Contact';
import Experience from 'components/section/Experience';
import Footer from 'components/section/Footer';
import Header from 'components/section/Header';
import HeaderMobileNav from 'components/section/Header/HeaderMobileNav';
import Home from 'components/section/Home';
import Presentation from 'components/section/Presentation';
import Projects from 'components/section/Projects';
import Skills from 'components/section/Skills';
import CustomHead from 'layout/Head';
import { AppConfig } from 'utils/AppConfig';

const App = () => {
    return (
        <div className="Portfolio">
            <CustomHead title={AppConfig.title} description={AppConfig.description} />
            <main>
                <Header />
                <Home />
                <hr className="Portfolio-hr" />
                <Skills />
                <Projects />
                <Presentation />
                <Experience />
                <hr className="Portfolio-hr" />
                <Contact />
                <hr className="Portfolio-hr" />
                <Footer />
            </main>
            <HeaderMobileNav />
        </div>
    );
};

export default App;
