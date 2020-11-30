const addBookAction = data => {
  return {
    type: 'ADD_BOOK',
    payload: { 
      book: data 
    }
  }
}

const resetBookAction = () => {
  return {
    type: 'REMOVE_ALL_BOOKS',
    payload: { 
      book: [] 
    }
  }
}

export {addBookAction, resetBookAction};