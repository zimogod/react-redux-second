
// 当前组件为UI组件

import React, { Component } from 'react';
class Home extends Component {
  constructor(props){
  	super(props)
    console.log(props)
  }
  addOneClick = () =>{
    //增加一方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.addNum(nums) 
  }
  addFiveClick = () =>{
    //增加五方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.addNum(nums)
  }
  reduceOneClick = () =>{
    //减少1方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.reduceNum(nums)
  }
  //异步减少5
  reducerNumAsync = () =>{
    //减少5方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.reducerNumAsync(nums);
  } 
  render() {
    const {num} = this.props;
    return (
      <div>
        home组件:
        <select ref="numValue">
           <option value="1">1</option>
           <option value="5">5</option>
        </select>
        <br/>
        <div>{num}</div>
        <button onClick={this.reduceOneClick}>减少1</button>
        <button onClick={this.reducerNumAsync}>减少5</button>
        <button onClick={this.addOneClick}>增加1</button>     
        <button onClick={this.addFiveClick}>增加5</button>
      </div>
    );

  }
}

export default Home;
