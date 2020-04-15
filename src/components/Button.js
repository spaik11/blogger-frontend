import React from 'react';

const button = ({ children, onClick, style, className, type }) => (
    <button 
        className={className}
        style={style} 
        onClick={onClick}
        type={type}
        >{children}</button>
);

export default button;