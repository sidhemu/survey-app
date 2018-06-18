import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  removeQuestion,
  saveQuestion,
  removeIndex,
  addQuesOptions,
  removeOptionList
} from '../Actions';

import OptionList from './Options';

import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: '',
      editStatus: true,
      option: '',
      optionArr: [],

      isTypeText: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
    this.addOptions = this.addOptions.bind(this);
  }

  addOptions() {
    const index = this.props.index;
    this.props.addQuesOptions(index);
    this.setState({
      optionArr: [...this.props.optionList.optList[index]]
    });
  }

  handleChange(event) {
    if (event.target.value === 'text') {
      this.setState({ isTypeText: false });
    } else {
      this.setState({ isTypeText: true });
      this.setState({ option: event.target.value });
    }
  }

  handleChangeText(event) {
    this.setState({ questionText: event.target.value });
  }

  saveQuestion() {
    if (this.state.editStatus) {
      const saveObj = {
        questionId: this.props.index,
        questionText: this.state.questionText,
        questionTYpe: this.state.option
      };
      this.props.saveQuestion(saveObj);
      this.setState({ editStatus: false });
    } else {
      this.setState({ editStatus: true });
    }
  }

  removeQuestion(value) {
    this.props.removeQuestion(value);
    this.props.removeIndex();
    this.props.removeOptionList(value);
  }

  render() {
    const qNum = this.props.index;
    let questionNum = 'Question ' + (qNum + 1);

    let displayComponent;

    if (this.state.isTypeText && this.state.option) {
      displayComponent = <i className="material-icons">add_circle_outline</i>;
    } else {
      displayComponent = null;
    }

    if (this.state.editStatus) {
      return (
        <div className="card question-card">
          <div className="card-body">
            <div className="card-title">
              <i className="material-icons" onClick={this.saveQuestion}>
                save
              </i>
              <i
                className="material-icons"
                onClick={() => this.removeQuestion(qNum)}
              >
                close
              </i>
            </div>
            <div className="card-subtitle mb-2 text-muted">
              <span>{questionNum}</span>
            </div>
            <div className="card-text">
              <textarea
                className="form-control"
                rows="2"
                defaultValue={this.props.questionDetails.text}
                onChange={this.handleChangeText}
              />
            </div>
            <div className="select-type">
              <span>Type : &nbsp;</span>

              <div className="styled-select">
                <select
                  name="options"
                  onChange={this.handleChange}
                  defaultValue={this.props.questionDetails.qType}
                >
                  <option value="" />
                  <option value="text">Text</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Check-Box</option>
                </select>
                <i className="material-icons down-arrow">arrow_drop_down</i>
              </div>
            </div>
            <div className="option-list">
              <p> Option</p>
              {this.state.optionArr.length > 0 ? (
                <OptionList
                  questionIndex={this.props.index}
                  optArr={this.props.optionList.optList[qNum]}
                  optionType={this.state.option}
                  isEditable={true}
                />
              ) : null}
            </div>

            <div className="option-area" onClick={this.addOptions}>
              {displayComponent}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card question-card">
          <div className="card-body">
            <div className="card-title">
              <i className="material-icons" onClick={this.saveQuestion}>
                edit
              </i>
              <i
                className="material-icons"
                onClick={() => this.removeQuestion(qNum)}
              >
                close
              </i>
            </div>
            <div className="card-subtitle mb-2 text-muted">
              <span>{questionNum}</span>
            </div>
            <div className="card-text">
              <p>{this.props.questionDetails.text}</p>
            </div>
            <div className="select-type">
              <span>Type : &nbsp;</span>
              <p> {this.props.questionDetails.qType} </p>
            </div>

            <div className="option-list">
              <p> Option</p>
              {this.state.optionArr.length > 0 ? (
                <OptionList
                  optArr={this.props.optionList.optList[qNum]}
                  optionType={this.state.option}
                  isEditable={false}
                />
              ) : null}
            </div>

            <div className="option-area">{displayComponent}</div>
          </div>
        </div>
      );
    }
  }
}

Question.propTypes = {
  index: PropTypes.number,
  optionList: PropTypes.object
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    removeQuestion,
    saveQuestion,
    removeIndex,
    addQuesOptions,
    removeOptionList
  }
)(Question);
