"use client";

import { Logo } from "@/components/ui/Logo";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";

export const SiteFooter = () => {
  const { dictionary } = useLanguage();
  const { footer, nav, common } = dictionary;

  return (
    <footer>
      <Wrap>
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo ariaLabel={nav.logoAriaLabel} />
            <p>{footer.description}</p>
          </div>
          <div className="footer-col">
            <h4>{footer.servicesHeading}</h4>
            <ul>
              <li>
                <a href="#services">{footer.serviceInterior}</a>
              </li>
              <li>
                <a href="#services">{footer.serviceMobile}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{footer.studioHeading}</h4>
            <ul>
              <li>
                <a href="#showcase">{nav.showcase}</a>
              </li>
              <li>
                <a href="#about">{nav.about}</a>
              </li>
              <li>
                <a href="#contact">{nav.contact}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{footer.contactHeading}</h4>
            <ul>
              <li>
                <a href={`tel:${common.phone}`}>{common.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${common.email}`}>{common.email}</a>
              </li>
              <li>
                {common.ownerName}, {common.ownerRole.split(",")[0]}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <p>{footer.tagline}</p>
        </div>
      </Wrap>
    </footer>
  );
};
