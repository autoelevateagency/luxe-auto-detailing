"use client";

import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/data/gallery-images";

export const About = () => {
  const { dictionary } = useLanguage();
  const { about, common } = dictionary;

  return (
    <section className="about" id="about">
      <Wrap className="about-grid">
        <Reveal>
          <PhotoPanel
            src={GALLERY_IMAGES.about}
            alt={about.photoAlt}
            className="about-photo"
          />
        </Reveal>
        <Reveal>
          <div className="about-copy">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2>{about.title}</h2>
            <p>{about.paragraph1}</p>
            <p>{about.paragraph2}</p>
            <div className="about-signoff">
              <span className="name">{common.ownerName}</span>
              <span className="role">{common.ownerRole}</span>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
