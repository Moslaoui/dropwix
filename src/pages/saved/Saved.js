import Filter from "../../components/filter/Filter"
import Product from "../../components/product/Product"
import './saved.scss'
import data from './sample.json'
import {useState} from 'react'
import Details from "../../components/details/Details"


function Saved() {
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
    <div className="saved">
      <div className="left-part">
        <div className="saved-content">
          <h1 className="saved-title">Saved Products</h1>
          <div className="saved-items">
            <div className="items">

            {
               data.slice(0,5).map((e) => {
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
            <div className="load-more">
              <p>Load more items</p>
            </div>
          </div>
        </div>
        <div className="sugg">
          <h1 className="saved-title">Recommended For You</h1>
        </div>
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
  )
}

export default Saved