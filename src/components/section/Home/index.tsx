import * as React from 'react';

import HomePresentation from './components/HomePresentation';
import HomeTitle from './components/HomeTItle';

const Home = () => {
    return (
        <section className="home">
            <HomeTitle />
            <HomePresentation />
        </section>
    );
};

export default Home;
