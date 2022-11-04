import './product.scss'
import {AiFillStar} from 'react-icons/ai'
import {BsHeartFill} from 'react-icons/bs'
import {BsBookmarkPlusFill} from 'react-icons/bs'
import {BiStore, BiToggleRight} from 'react-icons/bi'
import {FiExternalLink} from 'react-icons/fi'
import {useState} from 'react'

function Product({title,link,img,price,rating,handleclick,Styleactive}) {

  const [HeartActive, setIsHeart] = useState(false)
  const [SaveActive, setIsSave] = useState(false)
  const [StoreActive, setIsStore] = useState(false)

  const handleHeart = event => {
    setIsHeart(current => !current)
  };
  const handleSave = event => {
    setIsSave(current => !current)
  };
  const handleStore = event => {
    setIsStore(current => !current)
  };

  
  return (

        <div className={Styleactive(link)}  onClick={()=> {
          handleclick(link)
        }}>
          <div className='img-cont'>
            <img className='img' src={img} alt="" />
            <div className='action'><a href={link}><FiExternalLink className='icon'></FiExternalLink></a></div>
          </div>
          <div className="actions">
            <div className='action'>
              <BsHeartFill className={HeartActive? 'icon active': 'icon'} onClick={handleHeart}>
              </BsHeartFill></div>
            <div className='action'><BsBookmarkPlusFill className= {SaveActive? 'icon active': 'icon'} onClick={handleSave}></BsBookmarkPlusFill></div>
            <div className='action'><BiStore className= {StoreActive? 'icon active': 'icon'} onClick={handleStore}></BiStore></div>
          </div>

          <div className='information'>
            <span className='title'>{title}</span>
            <div className="bottom">
              <span className='price'>{price}</span>
              <span className="reviews">
                <AiFillStar className='icon'></AiFillStar>
              <span className='rating'>{rating}</span>
             </span>
          </div>
        </div>
      </div>

  )
}

export default Product