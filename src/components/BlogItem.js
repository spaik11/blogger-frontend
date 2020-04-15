import React from 'react';
import Button from './Button';

const blogItem = ({ onDelete, onUpdate, blog: { title, author, subject, article, _id: id } }) => (
    <div className="ui card" style={{ width: '75%', padding: '20px' }}>
        <div className="content">
            <div className="header">
                {title}
            </div>
            <br />
            <div className="meta">
                Author: {author}
            </div>
            <div className="meta">
                Subject: {subject.slice(0, 1).toUpperCase() + subject.slice(1)}
            </div>
            <hr />
            <div className="description">
                {article}
            </div>
            <Button 
                className='ui red button'
                style={{ margin: '10px 15px' }}
                onClick={() => onDelete(id)}>Delete</Button>
            <Button 
                className='ui green button'
                style={{ margin: '10px 15px' }}
                onClick={() => onUpdate(id)}>Update</Button>
        </div>
    </div>
);

export default blogItem;