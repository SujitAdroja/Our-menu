import { useState } from "react";
import items from "./data.js"
import Categories from "./Categories.jsx";
import Menu from "./Menu.jsx";
const allCategories=["all",...new Set(items.map(i=>i.category))];

export default function App(){

  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterMenu=(category)=>{
    if('all'===category){
      setMenuItems(items);
      return;
    }
    const newMenu=items.filter(item=>item.category===category);
    setMenuItems(newMenu);
  }
  return <main>
    <section className="menu section ">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterMenu={filterMenu}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}