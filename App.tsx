import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import WelcomeSection from './components/WelcomeSection';
import ServiceGrid from './components/ServiceGrid';
import FooterContact from './components/FooterContact';
import ChatBot from './components/ChatBot';
import AdminDashboard from './components/AdminDashboard';
import OurProducts from './components/OurProducts';

type Page = 'home' | 'products';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-white relative">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <ServiceHighlights />
            <WelcomeSection />
            <ServiceGrid />
          </>
        ) : (
          <OurProducts />
        )}
      </main>

      <FooterContact onAdminClick={() => setIsAdminOpen(true)} />
      
      {/* Floating Chat Bot */}
      <ChatBot />

      {/* Admin Dashboard Overlay */}
      {isAdminOpen && (
        <AdminDashboard onClose={() => setIsAdminOpen(false)} />
      )}
    </div>
  );
};

export default App;