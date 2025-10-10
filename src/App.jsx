import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout, Section } from './components/layout';
import { 
  NavBar, 
  Hero, 
  Footer, 
  About, 
  Social, 
  ChurchCenter,
  ContactForm,
  YoutubePage 
} from './components';
import { spacing, layout } from './theme';

/**
 * App component - Main application with modern, warm design
 */
const App = () => {
  return (
    <Router>
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
                    
                    <Section id="about" className="bg-white">
                      <About />
                    </Section>

                    <Section id="social" centered={false} className="bg-cream">
                      <Social />
                    </Section>

                    <Section centered={false} className="bg-white">
                      <ChurchCenter />
                    </Section>

                    <Section centered={false} className="bg-lightCream">
                      <ContactForm />
                    </Section>

                    <Footer />
                  </>
                } 
              />

              {/* YouTube Route */}
              <Route path="/youtube" element={<YoutubePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
