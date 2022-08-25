import * as React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle = (props: SectionTitleProps) => {
    return <h2 className="Portfolio-section-title">{props.title}</h2>;
};

export default SectionTitle;
