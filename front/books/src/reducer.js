const initialState = {
  number: 0,
  books: []
}

const bookReducer = (state = initialState, {type, payload}) => {

  if (type === 'ADD_BOOK') {
    return {
      ...state, 
      number: state.number + 1,
      books: [...state.books, payload.book]
    }
  }

  return state
}

export default bookReducer;