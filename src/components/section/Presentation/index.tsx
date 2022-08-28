import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/styleguide/GraySectionTitle';
import ImageCard from 'components/styleguide/ImageCard';
import SectionTitle from 'components/styleguide/SectionTitle';
import DotGrid from 'components/styleguide/svg/DotGrid';

const Presentation = () => {
    const router = useRouter();

    const ref = React.useRef(null);

    const [size, setSize] = useState(0);
    useEffect(() => {
        function updateSize() {
            if (ref && ref.current) {
                setSize((ref.current as any).clientHeight);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <section className="presentation">
            <aside className="presentation-aside">
                <div className="presentation-aside-rectangle" style={{ height: `${size + 64}px` }}></div>
                <div className="presentation-aside-dot">
                    <DotGrid />
                </div>
            </aside>
            <div ref={ref} className="presentation-container">
                <div className="classic-max-width">
                    <div className="presentation-content">
                        <div className="presentation-content-title">
                            <GraySectionTitle title="Faire ma connaissance" />
                        </div>
                        <div className="presentation-content-title">
                            <SectionTitle title="👋 Voici qui, Je suis !" />
                        </div>
                        <div className="presentation-content-description">
                            <p>
                                Passionné depuis plusieurs années par le développement, je pratique ma passion depuis
                                plus de 5 ans et professionnellement depuis 3 ans. Ma spécialité est le développement
                                Front End, en revanche étant de nature curieux, je possède des compétences des métiers
                                entourant ma spécialité. Cette qualité me permet d’avoir une vision globale sur chaque
                                projet auquel je touche et ainsi ne pas simplement penser à mon travail, mais à
                                l’utilisation de l’outil par les futurs utilisateurs ainsi que la prise en main par les
                                développeurs qui m’accompagne ou qui reprendrait un de mes projets.
                            </p>
                            <p>
                                En-dehors de mon métier, je suis toujours en quête de savoir et d’innovation, je cherche
                                toujours à apprendre ou faire mieux. Dans la vie, je suis passionné par l’esport depuis
                                presque 10 ans et le sport en général depuis tout jeune. L’audiovisuel, notamment les
                                séries TV et le cinéma sont d’autres de mes passions. Je suis aussi un adepte et un
                                grand fan de pop culture. Étant un enfant d’internet, élevé à la campagne, depuis tout
                                jeune, j’apprends à utiliser les outils qui m’entourent de façon autodidacte.
                            </p>
                        </div>
                        <div className="presentation-content-images">
                            <ImageCard imgPath={`.${`${router.basePath}/assets/images/me/Ju1.png`}`} />
                            <ImageCard imgPath={`.${`${router.basePath}/assets/images/me/Ju2.png`}`} />
                            <ImageCard imgPath={`.${`${router.basePath}/assets/images/me/Kayak.jpg`}`} />
                            <ImageCard imgPath={`.${`${router.basePath}/assets/images/me/Kart.png`}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
