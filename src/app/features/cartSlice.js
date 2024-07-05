import {createSlice} from '@reduxjs/toolkit'


const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add(state, action) {
			state.push(action.payload);
			// localStorage.setItem("cartIteam", JSON.stringify(state));
		},

        remove(state, action) {
            return state = state.filter((item) => item.id !== action.payload)
        }
	},
});



export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;


/* JSON.parse(localStorage.getItem("cartIteam")) || initialState */