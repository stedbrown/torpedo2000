export interface Dictionary {
  navigation: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    findUs: string;
    partners: string;
    damageReport: string;
    liabilityReport: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    repairs: {
      title: string;
      description: string;
    };
    hail: {
      title: string;
      description: string;
    };
    restoration: {
      title: string;
      description: string;
    };
    corrosion: {
      title: string;
      description: string;
    };
    glass: {
      title: string;
      description: string;
    };
    insurance: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  findUs: {
    title: string;
    subtitle: string;
    address: string;
    hours: string;
    weekdays: string;
    saturday: string;
    sunday: string;
    directions: string;
    phone: string;
    email: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  partners: {
    title: string;
    subtitle: string;
    description: string;
    becomePartner: string;
    contactUs: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      repairs: string;
      restorations: string;
      paintwork: string;
    };
  };
  damageReport: {
    title: string;
    subtitle: string;
    steps: {
      accident: {
        title: string;
        description: string;
      };
      report: {
        title: string;
        description: string;
      };
      submit: {
        title: string;
        description: string;
      };
    };
    form: {
      title: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        vehicleInfo: string;
        make: string;
        model: string;
        plate: string;
        accidentDate: string;
        damageDescription: string;
        photos: string;
        uploadPhotos: string;
        dragPhotos: string;
        photoFormats: string;
        privacyConsent: string;
      };
      submit: string;
    };
  };
  liabilityReport: {
    title: string;
    subtitle: string;
    form: {
      personalInfo: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      insuranceInfo: string;
      company: string;
      policyNumber: string;
      incidentInfo: string;
      date: string;
      location: string;
      description: string;
      involvedParties: string;
      photos: string;
      upload: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    contacts: string;
    quickLinks: string;
    servicesTitle: string;
    copyright: string;
  };
} 