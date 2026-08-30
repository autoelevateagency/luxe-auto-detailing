"use client";

import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { dictionary } = useLanguage();
  const { hero, common } = dictionary;

  return (
    <section className="hero">
      <PhotoPanel
        replaceLabel={hero.photoReplace}
        className="hero-photo"
      />
      <div className="hero-scrim" aria-hidden="true" />
      <Wrap className="hero-inner">
        <div>
          <div className="hero-tag">
            <span className="dot" aria-hidden="true" />
            <span className="eyebrow">{hero.tag}</span>
          </div>
          <h1>{hero.title}</h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-primary">
              {hero.bookDetail}
            </a>
            <a href="#services" className="btn btn-ghost">
              {hero.viewServices}
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="rule" aria-hidden="true" />
          <div className="hero-aside-row">
            <span className="label">{hero.studioLabel}</span>
            <span className="value">{hero.studioValue}</span>
          </div>
          <div className="hero-aside-row">
            <span className="label">{hero.availableLabel}</span>
            <span className="value">{hero.availableValue}</span>
          </div>
          <div className="hero-aside-row">
            <span className="label">{hero.callLabel}</span>
            <a className="value" href={`tel:${common.phone}`}>
              {common.phoneDisplay}
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
};
