import React, { useEffect, useRef } from 'react';

import AOS from 'aos';

import Contact from 'components/HomePage/Contact';
import Experience from 'components/HomePage/Experience';
import Footer from 'components/HomePage/Footer';
import Header from 'components/HomePage/Header';
import HeaderMobileNav from 'components/HomePage/Header/HeaderMobileNav';
import Home from 'components/HomePage/Home';
import Presentation from 'components/HomePage/Presentation';
import Projects from 'components/HomePage/Projects';
import Skills from 'components/HomePage/Skills';
import BackToHeader from 'components/StyleGuide/BackToHeader';
import { HomePageConfig } from 'data/AppConfig';
import CustomHead from 'layout/Head';

const HomePage = () => {
    const headerRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const presentationRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 750,
            once: true,
            delay: 50,
        });
    }, []);

    return (
        <div className="Portfolio">
            <CustomHead title={HomePageConfig.title} description={HomePageConfig.description} />
            <main>
                <Header
                    forwaredRef={headerRef}
                    skillRef={skillRef}
                    projectRef={projectRef}
                    presentationRef={presentationRef}
                    contactRef={contactRef}
                />
                <Home />
                <hr className="Portfolio-hr" />
                <Skills forwaredRef={skillRef} />
                <Projects forwaredRef={projectRef} />
                <Presentation forwaredRef={presentationRef} />
                <Experience />
                <hr className="Portfolio-hr" />
                <Contact forwaredRef={contactRef} />
                <hr className="Portfolio-hr" />
                <Footer />
                <BackToHeader forwaredRef={headerRef} />
            </main>
            <HeaderMobileNav
                skillRef={skillRef}
                projectRef={projectRef}
                presentationRef={presentationRef}
                contactRef={contactRef}
            />
        </div>
    );
};

export default HomePage;
