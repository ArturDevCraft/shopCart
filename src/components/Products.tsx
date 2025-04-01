import { DUMMY_PRODUCTS } from '../store/cart-slice';
import Product from './Product';
import classes from './Products.module.css';

const Products = () => {
	return (
		<section className={classes.products}>
			<h2 className={classes.sectionTitle}>Select Your products</h2>

			<ul className={classes.list}>
				{DUMMY_PRODUCTS.map((product) => (
					<Product
						key={product.id}
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
