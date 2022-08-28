import * as React from 'react';

type ProjectCardProps = {
    imgPath: string;
};

const ImageCard = (props: ProjectCardProps) => {
    return (
        <div
            className="Portfolio-imagecard"
            style={{
                background: `url(${props.imgPath})`,
            }}
        ></div>
    );
};

export default ImageCard;
