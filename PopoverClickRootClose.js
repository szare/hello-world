import React, {Component} from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';


class PopoverClickRootClose extends React.Component {
  render() {
    const x=this.props.x;
    const y= this.props.y;
    return (
      <Popover id="popover-trigger-click-root-close" placement="bottom" title="Popover bottom"
               style={{
                 left:769,
                 top:26
               }}>
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );
  }
}
export default PopoverClickRootClose;