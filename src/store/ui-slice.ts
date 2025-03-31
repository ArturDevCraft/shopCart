import { createSlice } from '@reduxjs/toolkit';

interface UiState {
	cartIsVisible: boolean;
	productIsVisible: boolean;
}

const initialState: UiState = {
	cartIsVisible: false,
	productIsVisible: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		toggleProduct(state) {
			state.productIsVisible = !state.productIsVisible;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
