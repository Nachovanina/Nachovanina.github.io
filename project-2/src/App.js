import React from 'react';
import FordHero from './components/FordHero';
import FeatureCards from './components/FeatureCards';
import ImageGallery360 from './components/ImageGallery360';
import VersionSelector from './components/VersionSelector';
import ContactForm from './components/ContactForm';
import FooterSection from './components/FooterSection';
import FloatingQuoteButton from './components/FloatingQuoteButton'; // Import the new component

function App() {
  return (
    <div className="font-sans">
      <FordHero />
      <FeatureCards />
      <ImageGallery360 />
      <VersionSelector />
      <ContactForm />
      <FooterSection />
      <FloatingQuoteButton /> {/* Add the new component here */}
    </div>
  );
}

export default App;

// DONE