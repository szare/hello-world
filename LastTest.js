import React, {Component} from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import PopoverClickRootClose from './PopoverClickRootClose';

class LastTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let x=0, y=0;

    // if (e.offsetX !== undefined && e.offsetY !== undefined)
    // {
      x=e.offsetX;
      y=e.offsetY;
    // }
    console.log('event=', 'X=', x, 'Y=', y)
    console.log('event=', 'X=', e.pageX, 'Y=', e.pageY)
    console.log('e.nativeEvent.offsetX=', e.nativeEvent.offsetX)
    console.log('e.nativeEvent.offsetY=', e.nativeEvent.offsetY)
  }

  render() {
    const popoverClickRootClose = (
      <PopoverClickRootClose x={this.state.x} y={this.state.y}/>
    );
    return (
      <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
        <Button onClick={this.handleClick}>Click w/rootClose</Button>
      </OverlayTrigger>
    );
  }
}
export default LastTest;
