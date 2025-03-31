import { DUMMY_PRODUCTS } from '../store/cart-slice';
import Product from './Product';

const Products = () => {
	return (
		<section>
			<h2>Select Your products</h2>

			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<Product
						id={product.id}
						name={product.name}
						description={product.description}
						image={product.image}
						price={product.price}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
