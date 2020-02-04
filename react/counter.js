import React, {Component } from 'react';



class Counter extends Component {

  state ={

​    count:0,

​    info:{

​      name: 'React',

​      age:10

​    }

  }

  constructor (props){

​    super(props);

​    this.setState({

​      count: this.props.init

​    })

​    console.log('call constuctor');

  }

  componentDidMount(){

​    console.log('componentDidMount');

  }

  shouldComponentUpdate(nextProps , nextState){

​    console.log('shouldComponent');

​    if (nextState.number % 5 === 0 ) return false;

​    return true;



  }

  componentWillUpdate(nextProps , nextState){

​    console.log('componentwillupdate')

  }

  componentDidUpdate(nextProps , nextState){

​    console.log('componentDidUpdate');

  }



  handleIncrease = () =>{

​    this.setState({

​      count: this.state.count +1

​    });



  }

  handleDecrease = () =>{

​    this.setState({

​      count: this.state.count -1

​    });



  }

  handleChange = () =>{

​    this.setState({

​      //1. this.state.info 의 name 을 수정

​    //  info: {

​    //    name: 'seohwa'

​    //  }

​      info: {

​        ...this.state.info,

​        name: 'seohwa'

​      }

​    });

​    //2.this.state.info (전개 연산자 )



  }

  render(){

​    return(

            <div>



​      <h1>Counter</h1>

​      <h2> {this.state.count}</h2>

​      <button onClick ={this.handleIncrease}> +</button>

​      <button onClick ={this.handleDecrease}>-</button>

​      <button onClick ={this.handleChange}>change info name </button>

​      {this.state.info.name}

​      /{this.state.info.age}

​      

​            </div>

​    );

  }

}

export default Counter;