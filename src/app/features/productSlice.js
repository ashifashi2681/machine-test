import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	searchItems: [],
	loading: false,
	error: null,
};

export const fetchData = createAsyncThunk("pfetchData", async () => {
	try {
		const res = await fetch("https://fakestoreapi.com/products");
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error("failed to fetch data");
	}
});

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		filterSearch(state, action) {
			state.searchItems = state.products.filter((item) =>
				item.title.includes(action.payload)
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export const { filterSearch } = productSlice.actions;
export default productSlice.reducer;
