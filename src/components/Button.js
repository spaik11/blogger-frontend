import React from 'react';
import PropTypes from 'prop-types';

const button = ({ children, onClick, style, className, type }) => (
    <button 
        className={className}
        style={style} 
        onClick={onClick}
        type={type}
        >{children}</button>
);

button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default button;