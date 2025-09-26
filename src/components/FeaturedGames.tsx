import React, { CSSProperties } from 'react';

export default function FeaturedGames() {
    return (
        <section style={styles.section}>
            <h2 style={styles.title}>Featured Games</h2>
            {/* Placeholder for game cards */}
        </section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    section: {
        marginBottom: '2rem',
        backgroundColor: '#222', // slightly lighter dark
        color: '#fff',
        borderRadius: '8px',
        padding: '1rem'
    },
    title: {
        color: '#a259ff' // purple accent
    }
};
