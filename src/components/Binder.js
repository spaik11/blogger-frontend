import React, { Component } from 'react';

class Binder extends Component {
    state = {
        text: 'Hello state',
        show: false
    }


    onClickMe = () => {
        console.log(this.state.text);
    }

    handleSomethingToggler = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        let handler = this.state.show ? <h3>Clicked on Handle Something</h3> : null;

        return (
            <div>
                {handler}
                <button 
                    className="ui primary button"
                    style={{ margin: '10px 15px' }}
                    onClick={this.onClickMe}
                    >Click Me</button>
                <button 
                    className="ui black button"
                    style={{ margin: '10px 15px' }}
                    onClick={this.handleSomethingToggler}
                    >Do Something</button>
            </div>
        );
    };
};

export default Binder;