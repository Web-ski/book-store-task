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

const removeBookAction = numberof => {
  return {
    type: 'REMOVE_BOOK',
    payload: { 
      book: numberof
    }
  }
}

export {addBookAction, resetBookAction, removeBookAction};