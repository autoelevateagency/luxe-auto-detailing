export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    phone: string;
    phoneDisplay: string;
    ownerName: string;
    ownerRole: string;
    companyName: string;
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
    photoReplace: string;
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
      photoReplace: string;
    };
    service2: {
      num: string;
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      photoReplace: string;
    };
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      exterior: { tag: string; title: string; photoReplace: string };
      interior: { tag: string; title: string; photoReplace: string };
      wheels: { tag: string; title: string; photoReplace: string };
      protection: { tag: string; title: string; photoReplace: string };
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
    photoReplace: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    note: string;
    hours: string;
    email: string;
    address: string;
    serviceArea: string;
    placeholderHours: string;
    placeholderEmail: string;
    placeholderAddress: string;
    placeholderServiceArea: string;
  };
  booking: {
    title: string;
    description: string;
    bookDetail: string;
    callCta: string;
    photoReplace: string;
  };
  footer: {
    description: string;
    servicesHeading: string;
    serviceInterior: string;
    serviceMobile: string;
    studioHeading: string;
    contactHeading: string;
    placeholderEmail: string;
    copyright: string;
    tagline: string;
  };
};
