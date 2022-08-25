import * as React from 'react';

type ButtonProps = {
    text: string;
    buttonFunc: () => void;
};

const Button = (props: ButtonProps) => {
    return (
        <button className="Portfolio-button" type="button" onClick={props.buttonFunc}>
            {props.text}
        </button>
    );
};

export default Button;
