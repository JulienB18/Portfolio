import React, { useEffect, useRef } from 'react';

import AOS from 'aos';
import { useRouter } from 'next/router';

import ErrorPage from 'components/ErrorPage';
import Contact from 'components/HomePage/Contact';
import Footer from 'components/HomePage/Footer';
import Header from 'components/Project/Header';
import Home from 'components/Project/Home';
import Project from 'components/Project/Project';
import BackToHeader from 'components/StyleGuide/BackToHeader';
import { HomePageConfig } from 'data/AppConfig';
import { projectsDetailsList } from 'data/ProjectDetails';
import CustomHead from 'layout/CustomHead';

const ProjectPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 750,
            once: true,
            delay: 50,
        });
    }, []);

    const headerRef = useRef(null);

    const router = useRouter();
    const { slug } = router.query;

    const result = projectsDetailsList.find((item) => item.slug === slug);

    if (!result) {
        return <ErrorPage />;
    }
    return (
        <div className="Portfolio">
            <CustomHead
                title={`Julien Boutet - ${result.mainTitle}`}
                description={HomePageConfig.description}
                noIndex={true}
            />
            <main className="project">
                <Header forwaredRef={headerRef} />
                <Home projectDetails={result} />
                <Project projectDetails={result} />
                <Contact />
                <Footer isWhite={true} />
                <BackToHeader forwaredRef={headerRef} />
            </main>
        </div>
    );
};

export default ProjectPage;
