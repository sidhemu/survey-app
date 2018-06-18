import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputOption from './InputOption';

import { deleteOption } from '../Actions';

import './Options.css';

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionArr: []
    };
  }
  deleteOption(elem) {
    this.props.deleteOption(this.props.questionIndex, elem.id);
  }

  render() {
    if (this.props.optionType === 'radio') {
      return (
        <fieldset
          className="option-section"
          id={'r-group_' + this.props.questionIndex}
        >
          {this.props.optArr.map((elem, index) => {
            return (
              <label
                key={index}
                htmlFor={'checkBox_' + elem.id}
                className={'option-div option-' + elem.id}
              >
                <input
                  type="radio"
                  id={'checkBox_' + elem.id}
                  name={'r-group_' + this.props.questionIndex}
                  disabled={this.props.isEditable}
                />
                {this.props.isEditable ? (
                  <div>
                    <InputOption
                      questionIndex={this.props.questionIndex}
                      data={elem}
                    />
                    <i
                      className="material-icons"
                      onClick={this.deleteOption.bind(this, elem)}
                    >
                      cancel
                    </i>
                  </div>
                ) : (
                  <span className="label-text">{elem.text}</span>
                )}
              </label>
            );
          })}
        </fieldset>
      );
    } else {
      return (
        <fieldset
          className="option-section"
          id={'r-group_' + this.props.questionIndex}
        >
          {this.props.optArr.map((elem, index) => {
            return (
              <label
                htmlFor={'checkBox_' + elem.id}
                key={index}
                className={'option-div option-' + elem.id}
              >
                <input
                  type="checkbox"
                  id={'checkBox_' + elem.id}
                  name={'r-group_' + this.props.questionIndex}
                  disabled={this.props.isEditable}
                />
                {this.props.isEditable ? (
                  <div>
                    <InputOption
                      questionIndex={this.props.questionIndex}
                      data={elem}
                    />
                    <i
                      className="material-icons"
                      onClick={this.deleteOption.bind(this, elem)}
                    >
                      cancel
                    </i>
                  </div>
                ) : (
                  <span className="label-text">{elem.text}</span>
                )}
              </label>
            );
          })}
        </fieldset>
      );
    }
  }
}

OptionList.propsTypes = {
  questionIndex: PropTypes.number,
  optArr: PropTypes.array,
  optionType: PropTypes.string,
  isEditable: PropTypes.boolean
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { deleteOption }
)(OptionList);
