import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "./CartSlice";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function Navbar() {
  const count = useSelector(selectCartCount);
  return <nav className="navbar">
    <Link className="brand" to="/">🌿 Paradise Nursery</Link>
    <div className="nav-links">
      <Link to="/">Home</Link><Link to="/plants">Plants</Link>
      <Link className="cart-link" to="/cart">🛒 Cart ({count})</Link>
    </div>
  </nav>;
}

function Home() {
  const navigate = useNavigate();
  return <>
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">BREATHE IN THE GREEN</p>
        <h1>Bring nature<br/>home.</h1>
        <p>Find your perfect plant companion and turn every corner into a little paradise.</p>
        <button className="primary-btn" onClick={() => navigate("/plants")}>Get Started →</button>
      </div>
    </section>
    <AboutUs />
  </>;
}

export default function App() {
  return <><Navbar /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/plants" element={<ProductList />} />
    <Route path="/cart" element={<CartItem />} />
    <Route path="*" element={<Home />} />
  </Routes><footer className="footer">© 2026 Paradise Nursery · Grow happiness every day 🌱</footer></>;
}
