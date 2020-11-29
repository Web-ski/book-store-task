const initialState = {
  number: 0
}

const bookReducer = (state = initialState, {type, payload}) => {

  if (type === 'ADD_BOOK') {
    return {
      ...state, 
      number: state.number + 1
    }
  }

  return state
}

export default bookReducer;