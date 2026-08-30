"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonial = () => {
  const { dictionary } = useLanguage();
  const { testimonial } = dictionary;

  return (
    <section className="testimonial">
      <Wrap>
        <Reveal>
          <div className="testimonial-inner">
            <span className="testimonial-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{testimonial.quote}</blockquote>
            <cite>{testimonial.cite}</cite>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
