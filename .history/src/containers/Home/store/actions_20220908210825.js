import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
	type: CHANGE_LIST,
	list
})

export const getHomeList = () => {
	return (dispatch) => {
		return axios.get('http://localhost:1300/get-list')
			.then((res) => {
				console.log(1234);
				const list = res.data.result;
				dispatch(changeList(list))
			});
	}
}