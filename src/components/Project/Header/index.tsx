import * as React from 'react';

import Link from 'next/link';

import Logo from 'components/StyleGuide/svg/Logo';

type IHeaderProps = {
    forwaredRef: React.MutableRefObject<null>;
};

const Header = (props: IHeaderProps) => {
    return (
        <div ref={props.forwaredRef} className="classic-max-width">
            <div className="project-header">
                <header>
                    <div className="logo-container">
                        <Logo />
                    </div>
                    <div className="button-container">
                        <Link className="Portfolio-button" href="/">
                            Revenir au site
                        </Link>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
