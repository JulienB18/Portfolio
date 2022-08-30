import * as React from 'react';

import * as Redux from 'react-redux';

import { GlobalState } from 'reducer/globalReducer';

type IMobileMenuProps = {
    skillRef: React.MutableRefObject<null>;
    projectRef: React.MutableRefObject<null>;
    presentationRef: React.MutableRefObject<null>;
    contactRef: React.MutableRefObject<null>;
};

type IMobileMenuState = {
    mobileMenu: boolean;
};

type IMobileMenuDispatchProps = {
    setMobileMenu: () => void;
};

const HeaderMobileNav = (props: IMobileMenuProps & IMobileMenuState & IMobileMenuDispatchProps) => {
    const isOpen = props.mobileMenu ? '-open' : '-close';

    const scrollIntoView = (ref: React.MutableRefObject<null>) => {
        if (ref && ref.current) {
            props.setMobileMenu();
            const newRef = ref.current as any;
            newRef.scrollIntoView();
        }
    };

    return (
        <div className={`header-mobile-nav header-mobile-nav${isOpen}`}>
            <ul>
                <li onClick={() => scrollIntoView(props.skillRef)}>Compétences</li>
                <li onClick={() => scrollIntoView(props.projectRef)}>Projets</li>
                <li onClick={() => scrollIntoView(props.presentationRef)}>À propos</li>
                <li onClick={() => scrollIntoView(props.contactRef)}>Contact</li>
            </ul>
        </div>
    );
};

export default Redux.connect(
    (state: GlobalState): IMobileMenuState => ({
        mobileMenu: state && state.mobileMenu,
    }),
    (dispatch): IMobileMenuDispatchProps => ({
        setMobileMenu: () => {
            dispatch({ type: 'SetMobileMenu' });
        },
    }),
)(HeaderMobileNav);
