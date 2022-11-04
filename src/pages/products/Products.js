import Filter from "../../components/filter/Filter"
import './products.scss'
import ProductList from "../../components/product_list/ProductList"


function Products() {
  return (
    <div className="product-cont">
      <Filter className="filter"></Filter>
      <div className="products-section">
        <ProductList></ProductList>
        {/* <div className="try">Hello</div>  */}
      </div>
    </div>
      
  )
}

export default Products