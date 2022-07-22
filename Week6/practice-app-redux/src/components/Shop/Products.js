import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productItem = [
  {id: 1, title: "Test", price: 6, description: "This is a first product - amazingc!"},
  {id: 2, title: "Test 2", price: 7, description: "This is a first product - amazing!c 2"},

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItem.map((item) => {
          return <ProductItem 
                    key={item.id}
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    description={item.description} 
                  />
        })}
        
      </ul>
    </section>
  );
};

export default Products;
