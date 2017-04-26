import axios from 'axios';

export function getVideos(q){
	console.log(q);
	return (dispatch) => {
		console.log(q);
		axios
		.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				q: q,
				type: 'video',
				key: 'AIzaSyCkzXBI_TiFdMfsQ6T0e9YyX4Zj32_K8S8'
			},
			
		})
		.then((response) => {
			console.log('response', response);
			return dispatch({
				type: 'GET_VIDEOS',
				payload: response.data
			});
		}).catch((err) => {
			console.log('error', err);
		});
	};
}