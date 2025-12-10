import React from 'react';
import Header from './components/Header';
import HeroWithTabs from './components/HeroWithTabs';
import SolutionsSection from './components/SolutionsSection';
import ImpactMakers from './components/ImpactMakers';
import InsightsSection from './components/InsightsSection';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroWithTabs />
      <SolutionsSection />
      <ImpactMakers />
      <InsightsSection />
      <CareerSection />
      <Footer />
    </div>
  );
}

export default App;
