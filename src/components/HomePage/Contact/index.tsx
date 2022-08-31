import * as React from 'react';

import ContactCard from 'components/StyleGuide/ContactCard';
import GraySectionTitle from 'components/StyleGuide/GraySectionTitle';
import SectionTitle from 'components/StyleGuide/SectionTitle';

type ContactProps = {
    forwaredRef?: React.MutableRefObject<null>;
};

const Contact = (props: ContactProps) => {
    return (
        <section ref={props.forwaredRef} className="contact">
            <div className="classic-max-width">
                <div className="contact-content">
                    <div className="contact-container" data-aos="zoom-in">
                        <div className="contact-container-title">
                            <GraySectionTitle title="Contact" />
                        </div>
                        <div className="contact-container-title">
                            <SectionTitle title="📞 Envie de me contacter ?" />
                        </div>
                        <div className="contact-container-cards">
                            <a
                                href="tel:+33750604130"
                                rel="noopener"
                                className="contact-container-cards-elem"
                                data-aos="zoom-in"
                            >
                                <ContactCard emoji="📱" text="07 50 60 41 30" />
                            </a>
                            <a
                                href="mailto:contact@julienboutet.fr"
                                rel="noopener"
                                className="contact-container-cards-elem"
                                data-aos="zoom-in"
                            >
                                <ContactCard emoji="📧" text="contact@julienboutet.fr" />
                            </a>

                            <div className="contact-container-cards-elem" data-aos="zoom-in">
                                <ContactCard emoji="📍" text="Remote / Bourges" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
