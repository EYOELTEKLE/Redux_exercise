//reducer description
/*

redux flow pattern

Action creator -> Action -> Dispatcher -> Reducer

King -> Guards -> Bird Messanger -> Banker


Store is like a Bank

The banker acts like a reducer who mutuates the store based on the action type 


*/

const reducer = (state = 0, action) => 
{
	switch (action.type) {
		case "deposit":
			return state + action.payload;
	
		case "withdraw":
			return state - action.payload;

		default:
			return state;
	}
}

export default reducer;