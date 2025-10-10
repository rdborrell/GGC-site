import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PageLayout, Section } from './components/layout';
import { 
  NavBar, 
  Hero, 
  Footer, 
  About, 
  Social, 
  ChurchCenter,
  ContactForm,
  YoutubePage,
  Team 
} from './components';
import { spacing, layout } from './theme';

/**
 * ScrollToAnchor - Handles scrolling to hash anchors on navigation
 */
const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

/**
 * App component - Main application with modern, warm design
 */
const App = () => {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="bg-lightCream min-h-screen">
        <div className="w-full overflow-hidden">
          {/* Fixed Navigation */}
          <NavBar />

          {/* Main Content */}
          <div className="pt-20">
            <Routes>
              {/* Home Route */}
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    
                    <Section id="about" className="bg-warmWhite">
                      <About />
                    </Section>

                    <Section id="social" centered={false} className="bg-eggshell">
                      <Social />
                    </Section>

                    <Section centered={false} className="bg-warmWhite">
                      <ChurchCenter />
                    </Section>

                    <Section centered={false} className="bg-cream">
                      <ContactForm />
                    </Section>

                    <Footer />
                  </>
                } 
              />

              {/* YouTube Route */}
              <Route path="/youtube" element={<YoutubePage />} />

              {/* Team Route */}
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
