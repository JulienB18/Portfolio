import * as React from 'react';

type ContactCardProps = {
    emoji: string;
    text: string;
    link?: string;
};
const ContactCard = (props: ContactCardProps) => {
    const onClick = () => {
        /* if (props.link) {
        } */
    };
    let style;
    if (props.link) {
        style = { cursor: 'pointer' };
    }
    return (
        <div className="Portfolio-contactcard" onClick={onClick} style={style}>
            <p className="Portfolio-contactcard-emoji">{props.emoji}</p>
            <p className="Portfolio-contactcard-text">{props.text}</p>
        </div>
    );
};

export default ContactCard;
