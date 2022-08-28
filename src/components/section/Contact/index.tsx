import * as React from 'react';

import ContactCard from 'components/styleguide/ContactCard';
import GraySectionTitle from 'components/styleguide/GraySectionTitle';
import SectionTitle from 'components/styleguide/SectionTitle';

const Contact = () => {
    return (
        <section className="contact">
            <div className="classic-max-width">
                <div className="contact-content">
                    <div className="contact-container">
                        <div className="contact-container-title">
                            <GraySectionTitle title="Contact" />
                        </div>
                        <div className="contact-container-title">
                            <SectionTitle title="📞 Envie de me contacter ?" />
                        </div>
                        <div className="contact-container-cards">
                            <div className="contact-container-cards-elem">
                                <ContactCard emoji="📱" text="07 50 60 41 30" />
                            </div>
                            <div className="contact-container-cards-elem">
                                <ContactCard emoji="📧" text="contact@julienboutet.fr" />
                            </div>

                            <div className="contact-container-cards-elem">
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
