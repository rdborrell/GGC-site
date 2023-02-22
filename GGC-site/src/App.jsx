import React from 'react'
import styles from './style'

import { NavBar, Hero, Footer, About, Social} from "./components"

const App = () => {
  return (
    <div className='bg-transparent'>
      <div className='w-full overflow-hidden'>
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
        
        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Social />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App