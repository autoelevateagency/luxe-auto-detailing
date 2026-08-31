"use client";

import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/data/gallery-images";

export const Booking = () => {
  const { dictionary } = useLanguage();
  const { booking, common } = dictionary;

  return (
    <section className="booking" id="booking">
      <PhotoPanel
        src={GALLERY_IMAGES.booking}
        alt={booking.photoAlt}
        className="booking-photo"
      />
      <div className="booking-scrim" aria-hidden="true" />
      <Wrap className="booking-inner">
        <Reveal>
          <h2>{booking.title}</h2>
          <p>{booking.description}</p>
          <div className="booking-actions">
            <a href={`tel:${common.phone}`} className="btn btn-primary">
              {booking.bookDetail}
            </a>
            <a href={`tel:${common.phone}`} className="btn btn-ghost">
              {booking.callCta}
            </a>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
};
