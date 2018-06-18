import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateText } from '../Actions';

import './Options.css';

class InputOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optiontext: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    this.setState({ optiontext: event.target.value }, () => {
      this.props.updateText(
        this.props.questionIndex,
        this.props.optIndex,
        this.state.optiontext
      );
    });
  }

  render() {
    return (
      <input
        type="text"
        defaultValue={this.props.data.text || ''}
        onChange={this.handleChangeText}
      />
    );
  }
}

InputOption.propTypes = {
  questionIndex: PropTypes.number,
  data: PropTypes.object
};

export default connect(
  null,
  { updateText }
)(InputOption);
