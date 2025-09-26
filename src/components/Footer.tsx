import React, { CSSProperties } from 'react';

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 VR Game Reviews. All rights reserved.</p>
        </footer>
    );
}

const styles: { [key: string]: CSSProperties } = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
};
