import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import { NavBar, Hero, Footer, About, Social, ChurchCenter } from "./components";
import ContactForm from './components/ContactForm';
import YoutubePage from './components/YoutubePage'; // Import the new page component

const App = () => {
  return (
    <Router>
      <div className='bg-transparent'>
        <div className='w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBar />
            </div>
          </div>
          <div className="pt-24"> {/* Add top padding here */}
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <div className={`bg-primary ${styles.flexCenter}`} id="about">
                    <div className={`${styles.boxWidth}`}>
                      <About />
                    </div>
                  </div>

                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} id="social">
                    <div className={`${styles.boxWidth}`}>
                      <Social />
                    </div>
                  </div>

                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <ChurchCenter />
                    </div>
                  </div>

                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <ContactForm />
                    </div>
                  </div>

                  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Footer />
                    </div>
                  </div>
                </>
              } />
              <Route path="/youtube" element={<YoutubePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
