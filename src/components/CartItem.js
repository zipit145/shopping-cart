import React from 'react';


const CartItem = (props) => {
  var cartItems = props.cartItemsList.map(item => {
    return (
      <div className="collection-item">
          <div className="row">
              <div className="col-md-8">{item.product.name}</div>
              <div className="col-md-2">{item.product.priceInCents}</div>
              <div className="col-md-2">{item.quantity}</div>
          </div>
      </div>
    )
  })
  return (
    <div className="collection-item">
      {cartItems}
    </div>
  )

}

export default CartItem