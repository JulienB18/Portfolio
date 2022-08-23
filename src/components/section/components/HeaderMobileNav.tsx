import * as React from 'react';

import * as Redux from 'react-redux';

import { GlobalState } from 'reducer/globalReducer';

type IMobileMenuDispatchProps = {
    mobileMenu: boolean;
};

const HeaderMobileNav = (props: IMobileMenuDispatchProps) => {
    const isOpen = props.mobileMenu ? '-open' : '-close';

    return (
        <div className={`header-mobile-nav header-mobile-nav${isOpen}`}>
            <ul>
                <li>Compétences</li>
                <li>Projets</li>
                <li>À propos</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Redux.connect(
    (state: GlobalState): IMobileMenuDispatchProps => ({
        mobileMenu: state && state.mobileMenu,
    }),
)(HeaderMobileNav);
