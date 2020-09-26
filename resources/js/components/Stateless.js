import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactClass extends Component {
    state = {
        isHeaderHidden: false
    }   
    
    render() {
        const {
            isHidden
        } = this.state;
        
        if (isHidden) {
            return null;
        } 

        return (
            <h1 className="header">React Component</h1>
        );
    }
}

const reactComponent = ReactDOM.render(
    <ReactClass />,
    document.getElementById('react-application')
);

export default ReactClass;