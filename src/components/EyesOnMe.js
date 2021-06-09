// Code EyesOnMe Component Here
import React, { Component } from 'react';


class EyesOnMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handlesBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handlesFocus = () => {
        console.log('Good!' )
    }

    render() { 
        return ( <div>
            <button onFocus={this.handlesFocus} onBlur={this.handlesBlur} >BUTTON</button>
        </div> );
    }
}
 
export default EyesOnMe;
