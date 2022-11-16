import Filter from "../../components/filter/Filter"
import './products.scss'
import Details from "../../components/details/Details"
import Product from "../../components/product/Product"
import {useState} from 'react'
import data from './sample.json'


function Products() {
  const [appState, changeState] = useState(
    {
      activeobject: null,
      etitle: null,
      eimg: null,
      eprice: null,
      eactive: true,
      elink: null,
      erating: null,
      ereviews: null,
      eorders: null,
      eHeart : null,
      eSave: null,
      eStore: null,
      Hearthandle : null,
      Storehandle: null,
      Savehandle : null
    }
  )

  function handleclick(index,orders,title,img,price,rating,reviews,HeartActive,SaveActive,StoreActive,handleHeart,handleSave,handleStore) {
    changeState({...appState, 
      activeobject: index, 
      eorders: orders,
      etitle: title,
      eimg: img,
      eprice: price,
      erating: rating,
      ereviews: reviews,
      eHeart : HeartActive,
      eSave: SaveActive,
      eStore : StoreActive,
      Hearthandle: handleHeart,
      Storehandle: handleStore,
      Savehandle: handleSave
    })
    setOpenDetails(true)
  }

  function Styleactive(index) {
    if(index === appState.activeobject){
      return 'card active'
    }else{
      return 'card'
    }
  }

  const [OpenDetails, setOpenDetails] = useState(false)

  function HandleClose() {
    setOpenDetails(false)
  }



  return (
    <div className="product-cont">
      <Filter></Filter>
      <div className="products-section">
        <div className="products">
        {
            data.map((e) => {
                return <Product key={e.link}
                                title= {e.title} 
                                price= {e.price}
                                img = {e.img}
                                rating= {e.reviews_weigh_avg}
                                link= {e.link}
                                orders = {e.orders}
                                reviews = {e.reviews}
                                handleclick= {handleclick}
                                Styleactive = {Styleactive}
                                >
                        </Product>
            })
        }
        </div>
        <Details 
        title = {appState.etitle}  
        price = {appState.eprice}
        img = {appState.eimg}
        reviews = {appState.ereviews}
        rating = {appState.erating}
        orders = {appState.eorders}
        open={OpenDetails}
        HandleOpen = {HandleClose} 
        HeartActive = {appState.eHeart}
        StoreActive = {appState.eStore}
        SaveActive = {appState.eSave}
        HandleHeart = {appState.Hearthandle}
        HandleSave = {appState.Savehandle}
        HandleStore = {appState.Storehandle}
        ></Details>
      </div>
    </div>
    
      
  )
}

export default Products