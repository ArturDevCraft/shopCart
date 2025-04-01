import { useAppDispatch, useAppSelector } from './hooks';
import { uiActions } from './store/ui-slice';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);

	return (
		<>
			<Header />
			<Cart />
			<Products />
		</>
	);
}

export default App;
