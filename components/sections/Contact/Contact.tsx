"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
  const { dictionary } = useLanguage();
  const { contact, common } = dictionary;

  return (
    <section className="contact" id="contact">
      <Wrap className="contact-grid">
        <Reveal>
          <div className="contact-primary">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{contact.title}</h2>
            <a href={`tel:${common.phone}`} className="contact-phone">
              {common.phoneDisplay}
            </a>
            <p className="contact-note">{contact.note}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="info-list">
            <div className="info-row">
              <span className="label">{contact.hours}</span>
              <span className="value placeholder">{contact.placeholderHours}</span>
            </div>
            <div className="info-row">
              <span className="label">{contact.email}</span>
              <span className="value placeholder">{contact.placeholderEmail}</span>
            </div>
            <div className="info-row">
              <span className="label">{contact.address}</span>
              <span className="value placeholder">{contact.placeholderAddress}</span>
            </div>
            <div className="info-row">
              <span className="label">{contact.serviceArea}</span>
              <span className="value placeholder">
                {contact.placeholderServiceArea}
              </span>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
