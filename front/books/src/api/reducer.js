const initialState = {
  number: 0,
  books: []
}

const bookReducer = (state = initialState, {type, payload}) => {

  switch(type) {
    case 'ADD_BOOK': {
      return {
        ...state, 
        number: state.number + 1,
        books: [...state.books, payload.book]
      }
    }
    case 'REMOVE_ALL_BOOKS': {
      return {
        ...state, 
        number: 0,
        books: []
      }
    }
    default:
      return state
  }
}

export default bookReducer;