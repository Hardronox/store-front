import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NumberPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedResults: []
    }
  }

  componentDidMount() {

  }


  render() {


    return (
      <div className="number-picker">
        <div className="button" onClick={() => this.props.onValueChange(false)}>-</div>
        <div className="value" >{this.props.value}</div>
        <div className="button" onClick={() => this.props.onValueChange(true)}>+</div>
      </div>
    );
  }
}

NumberPicker.propTypes = {
  children: PropTypes.element,

};

export default NumberPicker;
