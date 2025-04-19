import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/Cartslice';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch=useDispatch()
const handleRemove=(id)=>{
dispatch(remove(id))
}
  return (
    <div>
    {cartItems.map(item=>(
      <>
      <img src={item.image} alt='img'/>
      <h5>{item.title}</h5>
      <h4>{item.price}</h4>
      <button onClick={()=>handleRemove(item.id)}>Remove</button>
      </>
    ))}
      
    </div>
  )
}

export default Cart
