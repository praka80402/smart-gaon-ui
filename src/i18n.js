import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      logout: 'Logout',
      smartgaon: "SmartGaon AI",
      aboutUs: "About Us",
      aboutDescription: "SmartGaon AI is dedicated to bringing AI solutions to rural India, improving lives in villages."
    }
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      login: 'लॉगिन',
      logout: 'बाह्य पडणे',
      smartgaon: 'स्मार्टगाव एआय',
      aboutUs: "हमारे बारे में",
      aboutDescription: "स्मार्टगांव एआई ग्रामीण भारत में एआई समाधान लाने के लिए समर्पित है, गांवों में जीवन सुधारते हुए।"
    }
  },
  mr: {
    translation: {
      welcome: 'स्वागत आहे',
      login: 'लॉगिन',
      logout: 'बाह्य पडणे',
      smartgaon: 'स्मार्टगाव एआय',
      aboutUs: "आमच्याबद्दल",
      aboutDescription: "स्मार्टगाव एआय ग्रामीण भारतात AI सोर्सेस घेण्यासाठी समर्पित आहे, गावांचे जीवन सुधारण्यासाठी."
    }
  }
};

i18next.init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18next;
