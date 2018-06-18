import { combineReducers } from 'redux';
import { questionList } from './question';
import { optionList } from './option';
// import { questionIndex } from './questionIndex';

export default combineReducers({
  questionList,
  optionList
});
