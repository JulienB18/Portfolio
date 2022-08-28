import * as React from 'react';

import HomePresentation from './components/HomePresentation';
import HomeTitle from './components/HomeTitle';

const Home = () => {
    return (
        <div className="classic-max-width">
            <section className="home">
                <HomeTitle />
                <HomePresentation />
            </section>
        </div>
    );
};

export default Home;
