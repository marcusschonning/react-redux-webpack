import fetch from 'isomorphic-fetch'

//Export actions to dispatch reducer
//Asyncron dispatch (else just return an object to dispatch):
/*
export const getAllTodos = (dispatch) => {
	return (dispatch) => {
		fetch('./../app/api/getAll.php').then(function(res) {
			return res.json();
		}).then(function(todolist) {
			dispatch({
				type: 'REDUCER_TYPE',
				value
			});
		});
	}
}
*/
