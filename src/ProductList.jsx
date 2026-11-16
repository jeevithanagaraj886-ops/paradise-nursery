import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "./CartSlice";

const products = [
  {id:1,name:"Monstera Deliciosa",category:"Air Purifying",price:24,image:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700",description:"A statement plant with beautiful split leaves."},
  {id:2,name:"Snake Plant",category:"Air Purifying",price:18,image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=700",description:"A hardy plant that thrives with little care."},
  {id:3,name:"Peace Lily",category:"Air Purifying",price:22,image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=700",description:"Elegant green leaves and graceful white blooms."},
  {id:4,name:"Areca Palm",category:"Air Purifying",price:29,image:"https://images.unsplash.com/photo-1597055181300-a8b4be0c6f5b?w=700",description:"A lush tropical palm for bright rooms."},
  {id:5,name:"Spider Plant",category:"Air Purifying",price:15,image:"https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=700",description:"An easy-growing favorite with arching leaves."},
  {id:6,name:"Rubber Plant",category:"Air Purifying",price:26,image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700",description:"Glossy foliage adds a bold modern touch."},

  {id:7,name:"Golden Pothos",category:"Hanging & Trailing",price:16,image:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=700",description:"Trailing heart-shaped leaves with golden tones."},
  {id:8,name:"String of Pearls",category:"Hanging & Trailing",price:21,image:"https://images.unsplash.com/photo-1597055181300-a8b4be0c6f5b?w=700",description:"Delicate bead-like leaves spill over the pot."},
  {id:9,name:"English Ivy",category:"Hanging & Trailing",price:17,image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=700",description:"Classic trailing greenery for shelves."},
  {id:10,name:"Heartleaf Philodendron",category:"Hanging & Trailing",price:19,image:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=700",description:"Fast-growing vines with lovely heart leaves."},
  {id:11,name:"Boston Fern",category:"Hanging & Trailing",price:23,image:"https://images.unsplash.com/photo-1597055181300-a8b4be0c6f5b?w=700",description:"Soft, feathery fronds create a lush display."},
  {id:12,name:"String of Hearts",category:"Hanging & Trailing",price:25,image:"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=700",description:"Trailing vines with tiny heart-shaped leaves."},

  {id:13,name:"Aloe Vera",category:"Succulents & Cacti",price:14,image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700",description:"Sculptural succulent that loves sunny windows."},
  {id:14,name:"Jade Plant",category:"Succulents & Cacti",price:20,image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700",description:"A long-lived succulent with rounded leaves."},
  {id:15,name:"Echeveria",category:"Succulents & Cacti",price:12,image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700",description:"A compact rosette succulent in soft colors."},
  {id:16,name:"Moon Cactus",category:"Succulents & Cacti",price:13,image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700",description:"A cheerful, colorful cactus for a sunny sill."},
  {id:17,name:"Haworthia",category:"Succulents & Cacti",price:15,image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700",description:"A small striped succulent, perfect for desks."},
  {id:18,name:"String of Bananas",category:"Succulents & Cacti",price:19,image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700",description:"A playful trailing succulent with curved leaves."}
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const categories = [...new Set(products.map(p => p.category))];
  return <main className="page-wrap">
    <header className="page-heading"><p className="eyebrow">FIND YOUR GREEN FRIEND</p><h1>Shop Houseplants</h1><p>Thoughtfully selected plants for every space.</p></header>
    {categories.map(category => <section key={category}>
      <h2 className="category-title">{category}</h2>
      <div className="plant-grid">
        {products.filter(p => p.category === category).map(plant => {
          const added = cartItems.some(item => item.id === plant.id);
          return <article className="plant-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} loading="lazy"/>
            <div className="plant-info"><h3>{plant.name}</h3><p>{plant.description}</p>
              <div className="price-row"><span className="price">${plant.price.toFixed(2)}</span>
                <button className="add-btn" disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? "Added ✓" : "Add to Cart"}</button>
              </div>
            </div>
          </article>;
        })}
      </div>
    </section>)}
  </main>;
}
