import * as React from 'react';

import { useRouter } from 'next/router';

import DotGrid from 'components/StyleGuide/svg/DotGrid';

const HomePresentation = () => {
    const router = useRouter();
    return (
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
    );
};

export default HomePresentation;
