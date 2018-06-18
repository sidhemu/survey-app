export const optionList = (state = { index: [], optList: {} }, action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      state.optList = { ...state.optList, [action.questionId - 1]: [] };
      return { ...state };
    case 'NEW_OPTIONS':
      let arr = state.optList[action.questionId];
      let arrLen = arr.length;
      state.optList[action.questionId] = [
        ...state.optList[action.questionId],
        { id: arrLen, text: action.optionText }
      ];
      return { ...state };
    case 'ADD_INDEX':
      state.index = [...state.index, action.index - 1];
      return { ...state };
    case 'ADD_OPTION_TEXT':
      state.optList[action.questionId][action.optionId].text = action.text;
      return { ...state };
    case 'REMOVE_OPTION_LIST':
      let objOptList = { ...state.optList };
      let arrRm = [...state.index];

      arrRm.splice(arrRm.length - 1, 1);
      state.index = [];
      state.index = [...arrRm];

      delete objOptList[action.questionId];
      state.optList = {};
      state.optList = { ...objOptList };

      return { ...state };
    case 'DELETE_OPTION':
      let optionArr = state.optList[action.questionId];
      optionArr.splice(action.optionId, 1);
      state.optList[action.questionId] = [];
      state.optList[action.questionId] = [...optionArr];

      state.optList = { ...state.optList };

      return { ...state };
    default:
      return state;
  }
};
