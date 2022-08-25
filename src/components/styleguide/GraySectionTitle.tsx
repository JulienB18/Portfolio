import * as React from 'react';

type GraySectionTitleProps = {
    title: string;
};

const GraySectionTitle = (props: GraySectionTitleProps) => {
    return <h3 className="Portfolio-gray-title">{props.title}</h3>;
};

export default GraySectionTitle;
