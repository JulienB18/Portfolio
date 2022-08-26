import * as React from 'react';

import DotGrid from 'components/styleguide/svg/DotGrid';

const Projects = () => {
    return (
        <section className="projects">
            <aside className="projects-aside">
                <div className="projects-aside-rectangle"></div>
                <div className="projects-aside-dot">
                    <DotGrid />
                </div>
            </aside>

            <div className="classic-max-width">
                <div className="projects-content"></div>
            </div>
        </section>
    );
};

export default Projects;
