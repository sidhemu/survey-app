export const questionList = (state = { index: [], list: [] }, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      state.list = [
        ...state.list,
        { id: action.questionId, text: action.text, qType: '' }
      ];
      return { ...state };
    case 'ADD_INDEX':
      state.index = [...state.index, action.index - 1];
      return { ...state };
    case 'SAVE_QUESTION':
      state.list[action.questionId].text = action.text;
      state.list[action.questionId].qType = action.qType;
      return { ...state };
    case 'REMOVE_QUESTION':
      let array = [...state.list];
      let arr = [...state.index];

      arr.splice(arr.length - 1, 1);
      state.index = [];
      state.index = [...arr];

      array.splice(action.questionId, 1);
      state.list = [];
      state.list = [...array];

      return { ...state };
    default:
      return state;
  }
};
