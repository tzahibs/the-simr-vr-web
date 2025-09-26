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

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    backgroundColor: '#f4f4f4',
    color: '#333'
  },
  app: {
    textAlign: 'center'
  },
  main: {
    padding: '2rem'
  }
};

export default App;
