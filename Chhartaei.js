import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, OverlayTrigger, Popover, Overlay, Tooltip} from 'react-bootstrap';

class Chhartaei extends Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);


  }

  toggle() {
    this.setState({show: !this.state.show});
  }

  handleClick() {
    this.setState({show: !this.state.show});
  }

  render() {
    const CustomProper = (
      <div
        style={{
          ...this.props.style,
          position: 'absolute',
          backgroundColor: '#EEE',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          border: '1px solid #CCC',
          borderRadius: 10,
          marginLeft: -5,
          marginTop: 5,
          padding: 10,
        }}
      >
        <strong>Holy guacamole!</strong> Check this info.
        <Button ref="target2" onClick={this.handleClick}>
          Click me!
        </Button>
      </div>
    );
    const sharedProps = {
      show: this.state.show,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    };

    return (
      <div style={{height: 100, paddingLeft: 150, position: 'relative'}}>
        <Button ref="target" onClick={this.toggle}>
          Click me!
        </Button>

        <Overlay {...sharedProps} placement="bottom">
          <Popover id="overload-bottom">Tooltip overload!
            <Button ref="target2" onClick={this.handleClick}>
              Click me!
            </Button>
          </Popover>
        </Overlay>
      </div>
    );
  }
}

export default Chhartaei;
