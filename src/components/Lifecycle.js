import React, { Component } from 'react';

class Lifecycle extends Component {
    state = {
        list: [],
        toggle: true
    };

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            let list = [{ name: 'Sung' }];
            this.setState({ list });
        }, 2000);
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate called');
        if (prevState.toggle !== this.state.toggle) {
            console.log('Make database call');
            const newList = [...this.state.list];
            newList.push({ name: 'update name' });
            this.setState({ list: newList });
        };
    };

    handleClick = (event) => {
        event.preventDefault();
        const newList = [...this.state.list];
        newList.push({ name: 'new name' });
        this.setState({ list: newList });
    };

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        console.log('Rendered');
        let data = <h1>Loading...</h1>
        if (this.state.list.length > 0) {
            data = 
            <div>
                <h1>Hello, Lifecycle</h1>
                <ul>
                    {this.state.list.map((item, idx) => {
                        return <li key={idx}>{item.name}</li>
                    })}
                </ul>
                <button onClick={this.handleClick}>Name</button>
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        }
        return (
            <div>
                {data}
            </div>
        );
    };
};

export default Lifecycle;