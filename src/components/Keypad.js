// Code Keypad Component Here
import React, { Component } from 'react';


class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleKeyUp = (e) => {
        console.log('Entering password...')
    }

    render() { 
        return ( <input type="password" onKeyUp={this.handleKeyUp} />);
    }
}
 
export default Keypad;