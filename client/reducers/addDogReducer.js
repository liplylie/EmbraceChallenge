const initialState = {
	dog: "",
}
const addDogReducer = (state = initialState, action) => {
	console.log(state, 'addDogReducer')
	 switch(action.type) {
    case 'ADD_DOG': {
      return Object.assign({}, state, {
        dogName: action.payload.dogName,
        imageUrl: action.payload.imageUrl
      })
    }
    default: {
      return state;
    }
	}
}

export default addDogReducer; 