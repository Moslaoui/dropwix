import './productlist.scss'
import Product from '../product/Product'
import data from './sample.json'
import {useState} from 'react'


function ProductList()  {

  const [appState, changeState] = useState(
    {
      activeobject: null
    }
  )

  function handleclick(index) {
    changeState({...appState, activeobject: index})
  }

  function Styleactive(index) {
    if(index === appState.activeobject){
      return 'card active'
    }else{
      return 'card'
    }
  }

  
  return (
    <div className='products'>
        
        {
            data.map((e) => {
                return <Product key={e.link}
                                title= {e.title} 
                                price= {e.price}
                                img = {e.img}
                                rating= {e.reviews_weigh_avg}
                                link= {e.link}
                                handleclick= {handleclick}
                                Styleactive = {Styleactive}
                                >
                        </Product>
            })
        }
        
    </div>
  )
}

export default ProductList