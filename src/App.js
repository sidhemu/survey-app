import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addQuestion, addOption, addIndex } from './Actions';

import Question from './Components/Question';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  addNewQuestion() {
    this.props.addQuestion();

    this.setState({ currentIndex: this.props.questionList.list.length }, () => {
      this.props.addIndex(this.state.currentIndex);
      this.props.addOption(this.state.currentIndex);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container main-section">
          <div className="justify-content-md-center">
            <div className="question-section">
              <p>Questions</p>
              {this.props.questionList.list
                ? this.props.questionList.list.map((elem, index) => {
                    return (
                      <Question
                        key={index}
                        index={index}
                        questionDetails={elem}
                      />
                    );
                  })
                : null}
            </div>

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={this.addNewQuestion}
            >
              Add Question
            </button>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  questionList: PropTypes.object
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { addQuestion, addOption, addIndex }
)(App);
