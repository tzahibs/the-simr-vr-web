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
        background: "url('https://via.placeholder.com/1500x600') no-repeat center center/cover",
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
    },
    title: {
        fontSize: '3rem',
        marginBottom: '1rem'
    },
    searchInput: {
        padding: '0.5rem',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
    }
};
