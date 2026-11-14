import React, { useState, useEffect } from 'react';
import { ROUTES, RouteMeta } from './data/routes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CustomCursor } from './components/CustomCursor';
import { SeoHead } from './components/SeoHead';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FlatRentalsPage } from './pages/FlatRentalsPage';
import { HomeRentalsPage } from './pages/HomeRentalsPage';
import { RentalAgreementsPage } from './pages/RentalAgreementsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

interface AppProps {
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialPath }) => {
  // Normalize path (handle trailing slashes or subpaths)
  const getCleanPath = (pathname: string) => {
    const clean = pathname.replace(/\/+$/, '');
    return clean === '' ? '/' : clean;
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return getCleanPath(initialPath);
    if (typeof window !== 'undefined') {
      return getCleanPath(window.location.pathname);
    }
    return '/';
  });

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const cleanPath = getCleanPath(path);
    if (cleanPath !== currentPath) {
      if (typeof window !== 'undefined' && window.history) {
        window.history.pushState({}, '', cleanPath);
      }
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Resolve current route metadata
  const getRouteMeta = (path: string): RouteMeta => {
    switch (path) {
      case '/about':
        return ROUTES.about;
      case '/flat-rentals':
        return ROUTES.flatRentals;
      case '/home-rentals':
        return ROUTES.homeRentals;
      case '/rental-agreements':
        return ROUTES.rentalAgreements;
      case '/reviews':
        return ROUTES.reviews;
      case '/contact':
        return ROUTES.contact;
      case '/':
      default:
        return ROUTES.home;
    }
  };

  const activeMeta = getRouteMeta(currentPath);

  // Render active page component
  const renderPageComponent = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/flat-rentals':
        return <FlatRentalsPage onNavigate={navigateTo} />;
      case '/home-rentals':
        return <HomeRentalsPage onNavigate={navigateTo} />;
      case '/rental-agreements':
        return <RentalAgreementsPage onNavigate={navigateTo} />;
      case '/reviews':
        return <ReviewsPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-navy selection:bg-brand-blue selection:text-white">
      {/* Dynamic SEO metadata & JSON-LD */}
      <SeoHead meta={activeMeta} />

      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Header */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-1 pb-16 md:pb-0" id="main-content">
        {renderPageComponent()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky Contact Bar */}
      <MobileStickyBar currentPath={currentPath} />
    </div>
  );
};

export default App;

