import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { Carousel ,Progress} from 'antd';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div className="appending-loader-main-feed"
          style={{backgroundColor:'white',flexDirection:'row',height:window.outerHeight,width:window.outerWidth}}>
        <div style={{backgroundColor:'#323232',flexDirection:'row',width:300,height:window.outerHeight}}>

        </div>
      </div>
    );
  }
}

