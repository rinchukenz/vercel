import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import dstar from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addCart} = useContext(ShopContext);
  return (
    <div className='pr-dis'>
        <div className="p-left">
            <div className="small-img">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="main-img">
              <img src={product.image} alt="" />
            </div>
          
        </div>
        <div className="p-right">
          <div className="p-name">
            {product.name}
          </div> 

          <div className="rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={dstar} alt="" />
          </div>

          <div className="price">
            <div className="old">
              ${product.old_price}
            </div>
            <div className="new">
              ${product.new_price}
            </div>
          </div>

          <div className="desc">
            <p>A perfect choice for everyday wear, this printed kurta features three-quarter sleeves, 
                a round neck, and a flared hemline. Team it up with a pair of jeans or straight pants or palazzos.</p>
          </div>

          <div className="sel-size">
            <h3>Select Size</h3>
            <div className="sizes">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>
          </div>
          <div className="button">
            <button onClick={()=>{addCart(product.id)}}>ADD TO CART</button>
          </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay
