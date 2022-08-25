import * as React from 'react';

import * as Redux from 'react-redux';

import GithubLogo from 'components/styleguide/svg/GithubLogo';
import LinkedInLogo from 'components/styleguide/svg/LinkedInLogo';
import Logo from 'components/styleguide/svg/Logo';
import { GlobalState } from 'reducer/globalReducer';

type IMobileMenuProps = {
    mobileMenu: boolean;
};

type IHeaderDispatchProps = {
    setMobileMenu: () => void;
};

const Header = (props: IMobileMenuProps & IHeaderDispatchProps) => {
    const isOpen = props.mobileMenu ? '-open' : '-close';
    const container = props.mobileMenu ? ' header-mobile-opened' : '';
    const purpleCircle = props.mobileMenu ? ' header-purple-none' : '';

    return (
        <div className={`header-container${container}`}>
            <header>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="nav-container">
                    <nav>
                        <ul>
                            <li>Compétences</li>
                            <li>Projets</li>
                            <li>À propos</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="nav-container-logo">
                        <div>
                            <GithubLogo />
                        </div>
                        <div>
                            <LinkedInLogo />
                        </div>
                    </div>
                </div>
                <div className="nav-burger">
                    <div
                        className={`nav-burger-container nav-burger-container${isOpen}`}
                        onClick={() => props.setMobileMenu()}
                    >
                        <span className="nav-burger-container-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                </div>
                <div className={`header-purple ${purpleCircle}`}></div>
            </header>
        </div>
    );
};

export default Redux.connect(
    (state: GlobalState): IMobileMenuProps => ({
        mobileMenu: state && state.mobileMenu,
    }),
    (dispatch): IHeaderDispatchProps => ({
        setMobileMenu: () => {
            dispatch({ type: 'SetMobileMenu' });
        },
    }),
)(Header);
