import * as React from 'react';

import GithubLogo from 'components/StyleGuide/svg/GithubLogo';
import LinkedInLogo from 'components/StyleGuide/svg/LinkedInLogo';
import Logo from 'components/StyleGuide/svg/Logo';
import { githubLink, linkedInLink } from 'data/AppConfig';

type FooterProps = {
    isWhite?: boolean;
};

const Footer = (props: FooterProps) => {
    return (
        <footer className="footer" style={{ background: props.isWhite ? 'white' : '' }}>
            <div className="classic-max-width">
                <div className="footer-content">
                    <Logo />
                    <div className="footer-content-logos">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <GithubLogo />
                        </a>
                        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                            <LinkedInLogo />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
