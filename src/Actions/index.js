let qId = 0;
// let index = 0;

export const addOption = id => ({ type: 'ADD_OPTION', questionId: id });

export const addQuestion = () => ({
  type: 'ADD_QUESTION',
  text: 'Question Text',
  qType: '',
  questionId: qId++
});

export const addQuesOptions = id => ({
  type: 'NEW_OPTIONS',
  questionId: id,
  optionText: ''
});

export const saveQuestion = questionDetails => ({
  type: 'SAVE_QUESTION',
  questionId: questionDetails.questionId,
  text: questionDetails.questionText,
  qType: questionDetails.questionTYpe
});

export const addIndex = id => ({
  type: 'ADD_INDEX',
  index: id
});
export const removeIndex = () => ({
  type: 'REMOVE_INDEX'
});

export const removeQuestion = id => ({
  type: 'REMOVE_QUESTION',
  questionId: id
});
export const removeOptionList = id => ({
  type: 'REMOVE_OPTION_LIST',
  questionId: id
});

export const updateText = (qId, oId, text) => ({
  type: 'ADD_OPTION_TEXT',
  questionId: qId,
  optionId: oId,
  text
});

export const deleteOption = (qId, oId) => ({
  type: 'DELETE_OPTION',
  questionId: qId,
  optionId: oId
});
