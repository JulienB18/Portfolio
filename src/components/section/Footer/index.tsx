import * as React from 'react';

import GithubLogo from 'components/styleguide/svg/GithubLogo';
import LinkedInLogo from 'components/styleguide/svg/LinkedInLogo';
import Logo from 'components/styleguide/svg/Logo';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="classic-max-width">
                <div className="footer-content">
                    <Logo />
                    <div className="footer-content-logos">
                        <div>
                            <GithubLogo />
                        </div>
                        <div>
                            <LinkedInLogo />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
