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
            <h2>{contact.title}</h2>
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
              <span className="value">
                {common.hoursWeekday}
                <br />
                {common.hoursSaturday}
                <br />
                {common.hoursSunday}
              </span>
            </div>
            <div className="info-row">
              <span className="label">{contact.email}</span>
              <a href={`mailto:${common.email}`} className="value contact-link">
                {common.email}
              </a>
            </div>
            <div className="info-row">
              <span className="label">{contact.address}</span>
              <a
                href={common.mapsUrl}
                className="value contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {common.addressLine1}
                <br />
                {common.addressLine2}
              </a>
            </div>
            <div className="info-row">
              <span className="label">{contact.serviceArea}</span>
              <span className="value">{common.serviceArea}</span>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
