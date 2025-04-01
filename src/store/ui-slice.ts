import { createSlice } from '@reduxjs/toolkit';

interface UiState {
	cartIsVisible: boolean;
	productIsVisible: number;
}

const initialState: UiState = {
	cartIsVisible: false,
	productIsVisible: 0,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showProductDetails(state, action) {
			state.productIsVisible = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
