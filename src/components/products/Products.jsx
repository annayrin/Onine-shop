import Cards from "../card/Cards";

function Products() {
  let countPageProduct = 6;
  return (
    
      <div className="home ui container">
        <Cards pageDivider={countPageProduct} />
      </div>
    
  );
}

export default Products;
