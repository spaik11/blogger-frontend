import React from 'react';

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

export default search;