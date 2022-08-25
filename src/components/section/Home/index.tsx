import * as React from 'react';

import { useRouter } from 'next/router';

import Button from 'components/styleguide/Button';
import DotGrid from 'components/styleguide/svg/DotGrid';
import MouseScroll from 'components/styleguide/svg/MouseScroll';

const onCvClick = () => {};

const Home = () => {
    const router = useRouter();
    return (
        <section className="home">
            <div className="home-title">
                <h1>
                    👋Bonjour, je suis <span>Julien</span>, développeur web et mobile
                </h1>
                <p className="home-title-description">
                    originaire de Bourges. Spécialisé en intégration web et développement Front-end, je suis passionné
                    par mon métier et la découverte des différents secteurs d’activités de mes clients.
                </p>
                <p className="home-title-description">
                    Du développement d’applications web ou mobile, au développement de site e-commerce ou wordpress, je
                    m’adapte à tout type de projet. N’hésitez pas à me contacter !
                </p>
                <div className="home-title-buttons">
                    <div className="home-title-buttons-cv">
                        <Button text="Télécharger mon cv" buttonFunc={onCvClick} />
                    </div>
                    <div className="home-title-buttons-scroll">
                        <MouseScroll />
                        <p>Me découvrir</p>
                    </div>
                </div>
            </div>
            <div className="home-presentation">
                <div className="home-presentation-dotgrid home-presentation-dotgrid_top">
                    <DotGrid />
                </div>
                <div className="home-presentation-container">
                    <img src={`.${router.basePath}/assets/images/ProfilePic.png`} alt="Julien Boutet" />
                </div>
                <div className="home-presentation-dotgrid home-presentation-dotgrid_bot">
                    <DotGrid />
                </div>
            </div>
        </section>
    );
};

export default Home;
