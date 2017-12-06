export default function clickDogAction(info){
	console.log(info , 'clickDogAction')
	return {
	type: "CLICK_DOG",
	payload: info
	}
}