import React, { CSSProperties } from 'react';

export default function FeaturedGames() {
    return (
        <section style={styles.section}>
            <h2>Featured Games</h2>
            {/* Placeholder for game cards */}
        </section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    section: {
        marginBottom: '2rem'
    }
};
