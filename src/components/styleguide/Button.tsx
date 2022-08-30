import * as React from 'react';

type ButtonProps = {
    text: string;
    link: string;
};

const Button = (props: ButtonProps) => {
    return (
        <a className="Portfolio-button" href={props.link} target="_blank" rel="noopener noreferrer">
            {props.text}
        </a>
    );
};

export default Button;
