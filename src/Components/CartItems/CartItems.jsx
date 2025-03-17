import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

function CartItems() {
    const {all_product,cartItems,removeCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cfm">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cf cfm">
                    <img src={e.image} alt="" className='cp-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cq'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cricon' src={remove_icon} onClick={()=>{removeCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div className="div">
                    <div className="cti">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cti">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cti">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cp">
                <p>If you have a promo code, Enter it here</p>
                <div className="cpbox">
                    <input type="text" placeholder='Promo Code' />
                    <button>submit</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CartItems
