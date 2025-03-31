import { createSlice } from '@reduxjs/toolkit';

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
}

interface CartState {
	items: Product[];
}

const DUMMY_PRODUCTS: Product[] = [
	{
		id: 1,
		name: 'Wireless Earbuds',
		price: 49.99,
		description: 'High-quality Bluetooth earbuds with noise cancellation.',
		image: '1.png',
	},
	{
		id: 2,
		name: 'Smartwatch Pro',
		price: 199.99,
		description:
			'Feature-packed smartwatch with fitness tracking and notifications.',
		image: '1.png',
	},
	{
		id: 3,
		name: 'Gaming Mouse',
		price: 29.99,
		description: 'Ergonomic gaming mouse with customizable RGB lighting.',
		image: '1.png',
	},
	{
		id: 4,
		name: 'Portable Speaker',
		price: 79.99,
		description:
			'Compact and powerful speaker with deep bass and waterproof design.',
		image: '1.png',
	},
];

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {},
		removeProduct(state, action) {},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
