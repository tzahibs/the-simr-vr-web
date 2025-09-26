import React, { CSSProperties } from 'react';

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>&copy; 2025 VR Game Reviews. All rights reserved.</p>
        </footer>
    );
}

const styles: { [key: string]: CSSProperties } = {
    footer: {
        backgroundColor: '#181818',
        color: '#fff',
        padding: '1rem',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    text: {
        color: '#a259ff'
    }
};
