import * as React from 'react';

type BackToHeaderProps = {
    forwaredRef: React.MutableRefObject<null>;
};

const BackToHeader = (props: BackToHeaderProps) => {
    const scrollIntoView = (ref: React.MutableRefObject<null>) => {
        if (ref && ref.current) {
            const newRef = ref.current as any;
            newRef.scrollIntoView();
        }
    };
    return (
        <button type="button" className="Portfolio-backtoheader" onClick={() => scrollIntoView(props.forwaredRef)}>
            ↑
        </button>
    );
};

export default BackToHeader;
