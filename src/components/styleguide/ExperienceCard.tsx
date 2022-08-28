import * as React from 'react';

import { ExperienceType } from 'data/Experience';

const ExperienceCard = (props: ExperienceType) => {
    return (
        <div className="Portfolio-experiencecard">
            <p className="Portfolio-experiencecard-title">{props.title}</p>
            <p className="Portfolio-experiencecard-secondTitle">{props.secondTitle}</p>
            <p className="Portfolio-experiencecard-date">{props.date}</p>
            <hr />
        </div>
    );
};

export default ExperienceCard;
