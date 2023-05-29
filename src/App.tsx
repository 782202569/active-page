import React from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThiredSection from './sections/ThiredSection';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThiredSection />
    </div>
  );
}

export default App;
