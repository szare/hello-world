import React, {Component} from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';

class Original extends Component {
  constructor(props){
    super(props);
    this.state={isOpen: true};
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
    console.log('handleClose....');
    console.log('345678iuo');

    this.setState({isOpen:!this.state.isOpen});
  }

  render() {
    console.log('render', this.state.isOpen);
    const popoverBottom = (
      <Popover id="popover-positioned-bottom" show={this.state.isOpen}
               onHide={() => this.setState({ isOpen: false })} title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
        <Button onClick={this.handleClose} >close it</Button>
      </Popover>
    );

    return (
      <div className="FirstSample">
        <OverlayTrigger trigger="click" placement="bottom"  overlay={popoverBottom}>
          <Button>Holy guacamole!</Button>
        </OverlayTrigger>

      </div>
    );
  }
}

export default Original;
