import React, { CSSProperties } from 'react';

export default function Hero() {
    return (
        <header style={styles.heroSection}>
            <div>
                <h1 style={styles.title}>Your Ultimate Guide to VR Gaming</h1>
                <input style={styles.searchInput} type="text" placeholder="Search for a game..." />
            </div>
        </header>
    );
}

const styles: { [key: string]: CSSProperties } = {
    heroSection: {
        background: "#181818", // dark background
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center'
    },
    title: {
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#a259ff' // purple accent
    },
    searchInput: {
        padding: '0.5rem',
        width: '300px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#222',
        color: '#fff'
    }
};
