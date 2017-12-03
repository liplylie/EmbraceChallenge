const initialState = {
	dog: "",
}
const addDogReducer = (state = initialState, action) => {
	console.log(state, 'addDogReducer')
	 switch(action.type) {
    case 'ADD_DOG': {
      return Object.assign({}, state, {
        dog: action.payload,
      })
    }
    default: {
      return state;
    }
	}
}

export default addDogReducer; 