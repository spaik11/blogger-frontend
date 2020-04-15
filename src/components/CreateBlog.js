import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class CreateBlog extends Component {
    state = {
        blog: {
            title: '',
            subject: '',
            author: '',
            article: '',
        }
    };

    handleChange = (event) => {
        let updatedBlog = {...this.state.blog};
        updatedBlog[event.target.name] = event.target.value;
        this.setState({ blog: updatedBlog });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleCreateBlogSubmit(event, this.state.blog);

        let clearBlog = { title: '', subject: '', author: '', article: '' };
        this.setState({ blog: clearBlog });
        event.target.reset();
    };

    render() {
        return (
            <div style={{ width: '300px', margin: '40px' }}>
                <h1>Create Blog:</h1>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="equal width fields">
                        <div className="field">
                            <label>Title</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Title..." 
                                    name="title" 
                                    value={this.state.blog.title} 
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label>Subject</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Subject..." 
                                    name="subject" 
                                    value={this.state.blog.subject} 
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label>Author</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Author..." 
                                    name="author" 
                                    value={this.state.blog.author} 
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label>Article</label>
                            <div className="ui fluid input">
                                <input 
                                    type="text" 
                                    placeholder="Article..." 
                                    name="article" 
                                    value={this.state.blog.article} 
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <Button 
                            className="ui button"
                            type="submit">Submit</Button>
                    </div>
                </form>
                <hr />
            </div>
        );
    }
};

CreateBlog.propTypes = {
    handleCreateBlogSubmit: PropTypes.func,
};

export default CreateBlog;