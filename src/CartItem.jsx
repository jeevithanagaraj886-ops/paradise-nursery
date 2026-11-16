import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity, selectCartItems, selectCartTotal } from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return <main className="page-wrap">
    <header className="page-heading"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping Cart</h1></header>
    {items.length === 0 ? <div className="empty-cart"><h2>Your cart is waiting for some green 🌱</h2><p>Explore our collection and find a plant you love.</p><Link className="primary-btn" to="/plants">Continue Shopping</Link></div> :
      <>
        <div className="cart-list">
          {items.map(item => <article className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name}/>
            <div><h3>{item.name}</h3><p>Unit price: ${item.price.toFixed(2)}</p><p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p></div>
            <div className="quantity">
              <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({id:item.id,change:-1}))}>−</button>
              <strong>{item.quantity}</strong>
              <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({id:item.id,change:1}))}>+</button>
            </div>
            <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </article>)}
        </div>
        <section className="cart-summary"><h2><span>Total</span><span>${total.toFixed(2)}</span></h2>
          <button className="primary-btn" onClick={() => window.alert("Coming Soon! Thank you for shopping with Paradise Nursery.")}>Checkout</button>
          <br/><Link className="secondary-btn" to="/plants">Continue Shopping</Link>
        </section>
      </>
    }
  </main>;
}
