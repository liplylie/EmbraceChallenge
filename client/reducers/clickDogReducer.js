const initialState = {
	dogName: "",
	imageUrls: []
}

const clickDogReducer = (state=initialState, action) => {
	console.log(state, 'clickDogReducer')
	 switch(action.type) {
    case 'CLICK_DOG': {
      return Object.assign({}, state, {
        dogName: action.payload.dogName,
        imageUrls: action.payload.imageUrls
      })
    }
    default: {
      return state;
    }
	}
}

export default clickDogReducer; 