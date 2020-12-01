const initialState = {
  number: 0,
  books: []
}

const bookReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case 'ADD_BOOK': {
      return {
        ...state,
        books: [...state.books, payload.book],
        number: state.books.length + 1
      }
    }
    case 'REMOVE_ALL_BOOKS': {
      return {
        ...state,
        books: [],
        number: 0
      }
    }
    case 'REMOVE_BOOK': {
      return {
        ...state,
        books: [...state.books.slice(0, payload.book), ...state.books.slice(payload.book + 1)],
        number: state.books.length - 1
      }
    }
    default:
      return state
  }
}

export default bookReducer;