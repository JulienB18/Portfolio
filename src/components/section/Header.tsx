import * as React from 'react';

import GithubLogo from 'components/styleguide/svg/GithubLogo';
import LinkedInLogo from 'components/styleguide/svg/LinkedInLogo';
import Logo from 'components/styleguide/svg/Logo';

const Header = () => {
    return (
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
        </header>
    );
};

export default Header;
