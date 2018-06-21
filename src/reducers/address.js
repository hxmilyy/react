const addressReducer = (state = [], action) => {
  // console.log('addressReducer');
  // console.log(action);
  switch (action.type) {
    case 'ADDRESS_GET_ALL_SUCCESSED':
      return action.payload
    case 'ADDRESS_GET_ALL_FAILED':
      return state
    default:
      return state
  }
}

export default addressReducer
