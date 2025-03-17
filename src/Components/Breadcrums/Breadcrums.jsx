import React from 'react'
import './Breadcrums.css'
import arow_icon from '../Assets/breadcrum_arrow.png'

function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arow_icon} alt="" /> SHOP <img src={arow_icon} alt="" /> {product.category}  <img src={arow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
