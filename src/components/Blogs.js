import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import { searchIt } from '../services/search';

const blogs = (props) => {
    return props.blogs.filter(searchIt(props.searchTerm)).map((blog) => (
            <BlogItem
                key={blog._id}
                blog={blog}
                onDelete={props.onDelete}
                onUpdate={props.onUpdate}/>
        )
    );
};

blogs.propTypes = {
    toggle: PropTypes.bool,
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.number.isRequired,
            subject: PropTypes.string.isRequired,
            article: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        })
    )
};

export default blogs;