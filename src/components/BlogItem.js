import React from 'react';
import PropTypes from 'prop-types';
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
                type='submit'
                onClick={() => onDelete(id)}>Delete</Button>
            <Button 
                className='ui green button'
                style={{ margin: '10px 15px' }}
                type='submit'
                onClick={() => onUpdate(id)}>Update</Button>
        </div>
    </div>
);

blogItem.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    })
}

export default blogItem;