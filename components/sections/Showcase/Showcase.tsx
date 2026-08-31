"use client";

import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/data/gallery-images";

export const Showcase = () => {
  const { dictionary } = useLanguage();
  const { showcase } = dictionary;
  const { items } = showcase;

  return (
    <section className="showcase" id="showcase">
      <Wrap>
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">{showcase.eyebrow}</span>
              <h2>{showcase.title}</h2>
            </div>
            <p>{showcase.description}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="showcase-grid">
            <PhotoPanel
              src={GALLERY_IMAGES.showcaseExterior}
              alt={items.exterior.photoAlt}
              className="g1"
            >
              <div className="showcase-caption">
                <span>{items.exterior.tag}</span>
                {items.exterior.title}
              </div>
            </PhotoPanel>
            <PhotoPanel
              src={GALLERY_IMAGES.showcaseInterior}
              alt={items.interior.photoAlt}
              className="g2"
            >
              <div className="showcase-caption">
                <span>{items.interior.tag}</span>
                {items.interior.title}
              </div>
            </PhotoPanel>
            <PhotoPanel
              src={GALLERY_IMAGES.showcaseDetail}
              alt={items.wheels.photoAlt}
              className="g3"
            >
              <div className="showcase-caption">
                <span>{items.wheels.tag}</span>
                {items.wheels.title}
              </div>
            </PhotoPanel>
            <PhotoPanel
              src={GALLERY_IMAGES.showcaseFinish}
              alt={items.protection.photoAlt}
              className="g4"
            >
              <div className="showcase-caption">
                <span>{items.protection.tag}</span>
                {items.protection.title}
              </div>
            </PhotoPanel>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
