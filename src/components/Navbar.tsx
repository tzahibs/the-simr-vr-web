import React, { CSSProperties } from 'react';

export default function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div>
                <a href="/" style={styles.brandLink}>VR Game Reviews</a>
            </div>
            <ul style={styles.navList}>
                <li style={styles.navListItem}><a href="/vr-games" style={styles.navLink}>VR Games</a></li>
                <li style={styles.navListItem}><a href="/non-vr-games" style={styles.navLink}>Non-VR Games</a></li>
                <li style={styles.navListItem}><a href="/guides" style={styles.navLink}>Installation Guides</a></li>
                <li style={styles.navListItem}><a href="/about" style={styles.navLink}>About</a></li>
            </ul>
        </nav>
    );
}

const styles: { [key: string]: CSSProperties } = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#181818', // dark background
        padding: '1rem',
        color: '#fff'
    },
    brandLink: {
        color: '#a259ff', // purple accent
        textDecoration: 'none',
        fontSize: '1.5rem'
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0
    },
    navListItem: {
        marginLeft: '1.5rem'
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none'
    }
};
