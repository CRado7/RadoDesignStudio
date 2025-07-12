import React from 'react';
import '../styles/Container.css';

export default function Container({ children }) {
    return (
        <div className="container">
            <div className="container-inner">
                {children}
            </div>
        </div>
    );
}