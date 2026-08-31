"use client";

import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/data/gallery-images";

export const Services = () => {
  const { dictionary } = useLanguage();
  const { services, common } = dictionary;

  return (
    <section className="services" id="services">
      <Wrap>
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">{services.eyebrow}</span>
              <h2>{services.title}</h2>
            </div>
            <p>{services.description}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="service-row">
            <div className="service-num">{services.service1.num}</div>
            <div className="service-copy">
              <span className="eyebrow">{services.service1.eyebrow}</span>
              <h3>{services.service1.title}</h3>
              <p>{services.service1.description}</p>
              <a href={`tel:${common.phone}`} className="btn btn-line">
                {services.service1.cta}
              </a>
            </div>
            <PhotoPanel
              src={GALLERY_IMAGES.serviceInterior}
              alt={services.service1.photoAlt}
              className="service-photo"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="service-row">
            <PhotoPanel
              src={GALLERY_IMAGES.serviceMobile}
              alt={services.service2.photoAlt}
              className="service-photo"
            />
            <div className="service-copy">
              <span className="eyebrow">{services.service2.eyebrow}</span>
              <h3>{services.service2.title}</h3>
              <p>{services.service2.description}</p>
              <a href={`tel:${common.phone}`} className="btn btn-line">
                {services.service2.cta}
              </a>
            </div>
            <div className="service-num">{services.service2.num}</div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
