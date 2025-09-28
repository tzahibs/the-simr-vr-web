import React, { CSSProperties } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function Hero() {
    const { width } = useWindowSize();

    const titleStyle: CSSProperties = {
        fontSize: width <= 768 ? '2rem' : '3rem',
        marginBottom: '1rem',
        color: '#a259ff' // purple accent
    };

    const searchInputStyle: CSSProperties = {
        padding: '0.5rem',
        width: width <= 768 ? '80%' : '300px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#222',
        color: '#fff'
    };

    return (
        <header style={styles.heroSection}>
            <div>
                <h1 style={titleStyle}>Your Ultimate Guide to VR Gaming</h1>
                <input style={searchInputStyle} type="text" placeholder="Search for a game..." />
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
    }
};
