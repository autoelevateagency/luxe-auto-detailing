export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    phone: string;
    phoneDisplay: string;
    email: string;
    ownerName: string;
    ownerRole: string;
    companyName: string;
    hoursWeekday: string;
    hoursSaturday: string;
    hoursSunday: string;
    addressLine1: string;
    addressLine2: string;
    mapsUrl: string;
    serviceArea: string;
  };
  nav: {
    logoAriaLabel: string;
    logoMain: string;
    logoSub: string;
    services: string;
    showcase: string;
    about: string;
    contact: string;
    bookNow: string;
    menuToggle: string;
  };
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    bookDetail: string;
    viewServices: string;
    studioLabel: string;
    studioValue: string;
    availableLabel: string;
    availableValue: string;
    callLabel: string;
    photoAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    service1: {
      num: string;
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      photoAlt: string;
    };
    service2: {
      num: string;
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      photoAlt: string;
    };
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      exterior: { tag: string; title: string; photoAlt: string };
      interior: { tag: string; title: string; photoAlt: string };
      wheels: { tag: string; title: string; photoAlt: string };
      protection: { tag: string; title: string; photoAlt: string };
    };
  };
  testimonial: {
    quote: string;
    cite: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    photoAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    note: string;
    hours: string;
    email: string;
    address: string;
    serviceArea: string;
  };
  booking: {
    title: string;
    description: string;
    bookDetail: string;
    callCta: string;
    photoAlt: string;
  };
  footer: {
    description: string;
    servicesHeading: string;
    serviceInterior: string;
    serviceMobile: string;
    studioHeading: string;
    contactHeading: string;
    copyright: string;
    tagline: string;
  };
};
