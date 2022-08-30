import * as React from 'react';

import ExperienceCard from 'components/StyleGuide/ExperienceCard';
import { ExperienceType, proExperience, schoolExperience } from 'data/Experience';

const Experience = () => {
    return (
        <section className="experience">
            <div className="classic-max-width">
                <div className="experience-content">
                    <div className="experience-content-column">
                        <p className="experience-content-column-title">📚 Education</p>
                        {schoolExperience?.map((x: ExperienceType) => {
                            return (
                                <div key={x.title} className="experience-content-column-elem">
                                    <ExperienceCard title={x.title} secondTitle={x.secondTitle} date={x.date} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="experience-content-column">
                        <p className="experience-content-column-title">💼 Experience</p>
                        {proExperience?.map((x: ExperienceType) => {
                            return (
                                <div key={x.title} className="experience-content-column-elem">
                                    <ExperienceCard title={x.title} secondTitle={x.secondTitle} date={x.date} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
