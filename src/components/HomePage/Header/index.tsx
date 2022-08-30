import * as React from 'react';

import * as Redux from 'react-redux';

import GithubLogo from 'components/StyleGuide/svg/GithubLogo';
import LinkedInLogo from 'components/StyleGuide/svg/LinkedInLogo';
import Logo from 'components/StyleGuide/svg/Logo';
import { githubLink, linkedInLink } from 'data/AppConfig';
import { GlobalState } from 'reducer/globalReducer';

type IMenuProps = {
    forwaredRef: React.MutableRefObject<null>;
    skillRef: React.MutableRefObject<null>;
    projectRef: React.MutableRefObject<null>;
    presentationRef: React.MutableRefObject<null>;
    contactRef: React.MutableRefObject<null>;
};

type IMenuState = {
    mobileMenu: boolean;
};

type IHeaderDispatchProps = {
    setMobileMenu: () => void;
};

const Header = (props: IMenuProps & IMenuState & IHeaderDispatchProps) => {
    const isOpen = props.mobileMenu ? '-open' : '-close';
    const container = props.mobileMenu ? ' header-mobile-opened' : '';
    const purpleCircle = props.mobileMenu ? ' header-purple-none' : '';

    const scrollIntoView = (ref: React.MutableRefObject<null>) => {
        if (ref && ref.current) {
            const newRef = ref.current as any;
            newRef.scrollIntoView();
        }
    };

    return (
        <div ref={props.forwaredRef} className="classic-max-width">
            <div className={`header-container${container}`}>
                <header>
                    <div className="logo-container" data-aos="fade-down" data-aos-duration="1000">
                        <Logo />
                    </div>
                    <div className="nav-container" data-aos="fade-down" data-aos-duration="1000">
                        <nav>
                            <ul>
                                <li onClick={() => scrollIntoView(props.skillRef)}>Compétences</li>
                                <li onClick={() => scrollIntoView(props.projectRef)}>Projets</li>
                                <li onClick={() => scrollIntoView(props.presentationRef)}>À propos</li>
                                <li onClick={() => scrollIntoView(props.contactRef)}>Contact</li>
                            </ul>
                        </nav>
                        <div className="nav-container-logo">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <GithubLogo />
                            </a>
                            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                                <LinkedInLogo />
                            </a>
                        </div>
                    </div>
                    <div className="nav-burger" data-aos="fade-down" data-aos-duration="1000">
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
        </div>
    );
};

export default Redux.connect(
    (state: GlobalState): IMenuState => ({
        mobileMenu: state && state.mobileMenu,
    }),
    (dispatch): IHeaderDispatchProps => ({
        setMobileMenu: () => {
            dispatch({ type: 'SetMobileMenu' });
        },
    }),
)(Header);
