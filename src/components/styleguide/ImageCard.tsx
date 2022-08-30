import * as React from 'react';

type ProjectCardProps = {
    imgAlt: string;
    imgPath: string;
};

const ImageCard = (props: ProjectCardProps) => {
    return <img className="Portfolio-imagecard" src={props.imgPath} alt={props.imgAlt} />;
};

export default ImageCard;
