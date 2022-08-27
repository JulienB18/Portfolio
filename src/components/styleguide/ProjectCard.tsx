import * as React from 'react';

type ProjectCardProps = {
    title: string;
    type: string;
    imgPath: string;
    link: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    const onClick = () => {};
    return (
        <article
            className="Portfolio-projectcard"
            style={{
                background: `url(${props.imgPath})`,
            }}
            onClick={onClick}
        >
            <div className="Portfolio-projectcard-findout">
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.type}</p>
                </div>
                <button onClick={onClick}>En savoir plus</button>
            </div>
        </article>
    );
};

export default ProjectCard;
