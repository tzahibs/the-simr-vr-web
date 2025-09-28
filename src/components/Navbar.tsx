import React, { CSSProperties, useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const WIDTH_CHANGE_SIZE = 768;

export default function Navbar() {
    const { width } = useWindowSize();
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        isMenuOpen && WIDTH_CHANGE_SIZE < width && setIsMenuOpen(false);
    }, [width, isMenuOpen]);

    const renderDesktopMenuButton = () => (
        <div onClick={toggleMenu} style={styles.hamburger}>&#9776;</div>
    )

    return (
        <nav style={styles.navbar}>
            <div>
                <a href="/" style={styles.brandLink}>VR Game Reviews</a>
            </div>
            {width <= WIDTH_CHANGE_SIZE ? renderDesktopMenuButton() : (
                <ul style={styles.desktopNavListStyle}>
                    <li style={styles.navListItem}><a href="/vr-games" style={styles.navLink}>VR Games</a></li>
                    <li style={styles.navListItem}><a href="/non-vr-games" style={styles.navLink}>Non-VR Games</a></li>
                    <li style={styles.navListItem}><a href="/guides" style={styles.navLink}>Installation Guides</a></li>
                    <li style={styles.navListItem}><a href="/about" style={styles.navLink}>About</a></li>
                </ul>
            )}
            {width <= WIDTH_CHANGE_SIZE && (
                <ul style={{ ...styles.navListStyle, transform: isMenuOpen ? 'translateX(0)' : 'translateX(200%)', }}>
                    <li style={styles.mobileNavListItem}><a href="/vr-games" style={styles.navLink}>VR Games</a></li>
                    <li style={styles.mobileNavListItem}><a href="/non-vr-games" style={styles.navLink}>Non-VR Games</a></li>
                    <li style={styles.mobileNavListItem}><a href="/guides" style={styles.navLink}>Installation Guides</a></li>
                    <li style={styles.mobileNavListItem}><a href="/about" style={styles.navLink}>About</a></li>
                </ul>
            )}
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
        color: '#fff',
        position: 'relative',
    },
    brandLink: {
        color: '#a259ff', // purple accent
        textDecoration: 'none',
        fontSize: '1.5rem'
    },
    navListItem: {
        marginLeft: '1.5rem'
    },
    mobileNavListItem: {
        padding: '1rem 0',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5rem',
    },
    hamburger: {
        cursor: 'pointer',
        fontSize: '1.5rem',
        zIndex: 1001,
    },
    closeIcon: {
        position: 'absolute',
        top: '1rem',
        right: '1.5rem',
        cursor: 'pointer',
        fontSize: '2.5rem',
        color: '#fff',
    },
    desktopNavListStyle: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navListStyle: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#222',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    }
};
