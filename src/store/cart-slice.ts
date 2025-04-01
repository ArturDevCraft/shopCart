import { createSlice } from '@reduxjs/toolkit';

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
}

export interface Item extends Product {
	quantity: number;
}

interface CartState {
	items: Item[];
}

export const DUMMY_PRODUCTS: Product[] = [
	{
		id: 1,
		name: 'Wireless Earbuds',
		price: 49.99,
		description: 'High-quality Bluetooth earbuds with noise cancellation.',
		image: '1.jpeg',
	},
	{
		id: 2,
		name: 'Smartwatch Pro',
		price: 199.99,
		description:
			'Feature-packed smartwatch with fitness tracking and notifications.',
		image: '2.jpeg',
	},
	{
		id: 3,
		name: 'Gaming Mouse',
		price: 29.99,
		description: 'Ergonomic gaming mouse with customizable RGB lighting.',
		image: '3.jpeg',
	},
	{
		id: 4,
		name: 'Portable Speaker',
		price: 79.99,
		description:
			'Compact and powerful speaker with deep bass and waterproof design.',
		image: '4.jpeg',
	},
];

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart(state, action) {
			const newProduct: Product = action.payload;
			const quantity: number = action.payload?.quantity ?? 1;
			console.log(quantity);
			const existingProduct: Item | undefined = state.items.find(
				(item) => item.id === newProduct.id
			);

			if (existingProduct) {
				existingProduct.quantity += quantity;
			} else {
				state.items.push({
					...newProduct,
					quantity: quantity,
				});
			}
		},
		removeProductFromCart(state, action) {
			const id = action.payload;
			const existingProduct: Item | undefined = state.items.find(
				(item) => item.id === id
			);

			if (existingProduct?.quantity === 1) {
				state.items = state.items.filter(
					(item) => item.id !== existingProduct.id
				);
			} else if (existingProduct) {
				existingProduct.quantity--;
			}
		},
		clearCart(state) {
			state.items = [];
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
