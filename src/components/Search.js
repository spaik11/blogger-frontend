import React from 'react';
import PropTypes from 'prop-types';

const search = (props) => (
    <form className="ui form">
        <div className="field">
            <input 
                onChange={props.handleChange} 
                type="text" 
                placeholder="Search By Subject..." 
                value={props.searchTerm} />
        </div>
    </form>
);

search.propTypes = {
    handleChange: PropTypes.func,
    searchTerm: PropTypes.string
}

export default search;