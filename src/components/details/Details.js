import './details.scss'
import {AiFillStar} from 'react-icons/ai'
import {BsHeartFill} from 'react-icons/bs'
import {BsBookmarkPlusFill} from 'react-icons/bs'
import {BiStore} from 'react-icons/bi'
import  {AiOutlineClose} from 'react-icons/ai'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect} from 'react'



function Details({open, title, price, img, reviews, orders, rating, HeartActive, StoreActive, SaveActive, HandleOpen, HandleHeart, HandleSave, HandleStore}) {

  useEffect(()=> {
    console.log('hello')
  },[HeartActive])

  if (!open) return null
  return (
    <div className="details">
    <div className='card-d'>
         <div className="card-top">
            <div className="card-img">
             <img className='img--' src={img} alt="" />
            </div>

            <div className="close-card" onClick={HandleOpen}>
                <AiOutlineClose className='icon'></AiOutlineClose>
            </div>

            <div className="status">
                <div className="status-wrapper">
                    <p>Active</p>
                </div>
            </div>  
         </div>

         <div className="card-bottom">
            <p className="title">
                {title}
            </p>
            <div className="metrics">

              <span className="review">
                <AiFillStar className='icon'></AiFillStar>
              <span className='rating'>{rating}</span>
             </span>

             <div className="seperator"></div>
             <p className="reviews">
                {reviews}
             </p>
             <p className="orders"> {orders} </p>
            </div>
            
            <div className="price-info">
              <div className="price-wrapper">
                  <p className="price">
                       {price}
                  </p>
              </div>

              <div className="actions">
                  <div className='action'>
                        <BsHeartFill className={HeartActive? 'icon active': 'icon'} onClick = {HandleHeart}>
                        </BsHeartFill></div>
                  <div className='action'>
                        <BsBookmarkPlusFill className= {SaveActive? 'icon active': 'icon'} onClick = {HandleSave}>
                        </BsBookmarkPlusFill></div>
                  <div className='action'>
                        <BiStore className= {StoreActive? 'icon active': 'icon'} onClick = {HandleStore}>
                        </BiStore></div>
              </div>
            </div>

            {/* <p>Stats</p> */}

            <div className="stats"> 

              <div className="saturation">
                <CircularProgressbar 
                value={70}
                text = '70%'
                styles = {buildStyles({
                  pathColor: '#0082BC',
                })} />
              </div>

              <span className="seperator"></span>

              <div className="momentum">
                <CircularProgressbar 
                value={80}
                text = '80%'
                styles = {buildStyles({
                  pathColor: '#FF9F00',
                  textColor: '#FF9F00',
                })}/>
              </div>

              <span className="seperator"></span>

              <div className="price-compa">
                <CircularProgressbar 
                value={40}
                text = '40%'
                styles = {buildStyles({
                  pathColor: '#6868AC',
                  textColor: '#6868AC',

                })}/>
              </div>

            </div>

         </div>
         
      </div>
    </div>
  )
}

export default Details