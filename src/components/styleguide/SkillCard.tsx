import * as React from 'react';

type SkillCardProps = {
    title?: string;
    skills?: string[];
    color?: string;
    imgPath?: string;
};

const SkillCard = (props: SkillCardProps) => {
    return (
        <article className="Portfolio-skillcard">
            <div className="Portfolio-skillcard-title">
                <div className="Portfolio-skillcard-title-icon">
                    <div
                        className="Portfolio-skillcard-title-icon-bg"
                        style={{ background: `rgba(${props.color}, 0.40)` }}
                    ></div>
                    <img src={props.imgPath} alt={props.title} />
                </div>
                <h4>{props.title}</h4>
            </div>
            <ul className="Portfolio-skillcard-list">
                {props.skills?.map((x: string) => {
                    return (
                        <li className="Portfolio-skillcard-list-li" key={x}>
                            <div></div>
                            <p>{x}</p>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default SkillCard;
