import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import UpdateBlog from './UpdateBlog';

class App extends Component {
    state = {
        blogs: [],
        searchTerm: '',
        toggle: true,
        blog: {}
    };

    loadBlogs = () => {
        const url = '/blogs';

        axios.get(url)
            .then((response) => {
                this.setState({blogs: response.data});
            });
    };

    loadBlog = (id) => {
        axios.get(`/blog/${id}`).then((blog) => {
            this.setState({
                toggle: !this.state.toggle,
                blog: blog.data
            });
        });
    };

    onDelete = (id) => {
        axios.delete(`/blog/${id}`).then(() => {
            this.loadBlogs();
        });
    };

    onUpdate = (id) => {
        this.loadBlog(id);
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleCreateBlogSubmit = (event, blog) => {
        event.preventDefault();
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        };

        axios.post('/blog', blog, axiosConfig).then(() => {
            this.loadBlogs();
        });
    };

    handleUpdateBlogSubmit = (event, blog, id) => {
        event.preventDefault();
        this.setState({ toggle: true });
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        };

        axios.put(`/blog/${id}`, blog, axiosConfig).then(() => {
            this.loadBlogs();
        });
    };

    componentDidMount() {
        this.loadBlogs();
    };

    render() {
        let toggleComponent = this.state.toggle 
            ? <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit}/> 
            : <UpdateBlog handleUpdateBlogSubmit={this.handleUpdateBlogSubmit} blog={this.state.blog}/>;
        return (
            <div style={{
                marginTop: '100px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column' 
            }}>
                <Search 
                    handleChange={this.handleChange}
                    searchTerm={this.state.searchTerm}/>
                <hr style={{ width: '75%'}} />
                {toggleComponent}
                <Blogs 
                    blogs={this.state.blogs}
                    searchTerm={this.state.searchTerm}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                />
            </div>
        );
    };
};

export default App;