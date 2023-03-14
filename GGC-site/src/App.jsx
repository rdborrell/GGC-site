import React from "react";
import styles from "./style";

import { NavBar, Hero, Footer } from "./components";

const App = () => {
    return (
        <div className="bg-transparent h-screen bg-primary">
            <div className="w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <NavBar />
                    </div>
                </div>
                
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>
                
                <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}></div>
                </div>
                
                <div className={`bg-primary`}>
                    <div className="w-full mt-5 border-t-4 border-[#d39e2c]">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
