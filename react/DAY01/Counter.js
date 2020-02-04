import React, {Component } from 'react';

class Counter extends Component {
    state ={
        count:100
    }
    handleIncrease = () =>{
        this.setState({
            count: this.state.count +1
        });

    }
    handleDecrease = () =>{
        this.setState({
            count: this.state.count -1
        });

    }
    render(){
        return(
            <div>

            <h1>Counter</h1>
            <h2> {this.state.count}</h2>
            <button onClick ={this.handleIncrease}> +</button>
            <button onClick ={this.handleDecrease}>-</button>
            
            
                        </div>
        );
    }
}
export default Counter;