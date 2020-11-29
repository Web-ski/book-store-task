const addBookAction = data => {
  return {
    type: 'ADD_BOOK',
    payload: { 
      book: data 
    }
  }
}

export default addBookAction;