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
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            article: PropTypes.string.isRequired
        })
    )
};

export default blogs;