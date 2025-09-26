import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import { LatestReviews } from './components/LatestReviews';
import Footer from './components/Footer';



function App() {
  return (
    <div style={styles.body}>
      <div style={styles.app}>
        <Navbar />
        <Hero />
        <main style={styles.main}>
          <FeaturedGames />
          <LatestReviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    backgroundColor: '#181818', // dark background
    color: '#fff' // white text
  },
  app: {
    textAlign: 'center' as const
  },
  main: {
    padding: '2rem'
  }
};

export default App;
