import React from 'react';
import './MenuSection.css';

const menuData = [
  {
    category: "DIM SUM",
    items: [
      { name: "Truffle Siu Mai", price: "85k", description: "Pork and shrimp dumplings topped with black truffle." },
      { name: "Scallop Har Gow", price: "95k", description: "Translucent dumplings with fresh scallops and chives." },
      { name: "Wagyu Beef Puffs", price: "110k", description: "Flaky pastry filled with honey-glazed wagyu beef." }
    ]
  },
  {
    category: "SIGNATURE ROASTS",
    items: [
      { name: "Peking Duck", price: "320k", description: "Traditional roasted duck served with handmade pancakes." },
      { name: "Crispy Pork Belly", price: "185k", description: "Slow-roasted pork with crackling skin and mustard dip." },
      { name: "Honey Glazed Char Siu", price: "165k", description: "Cantonese BBQ pork with a maltose glaze." }
    ]
  },
  {
    category: "CRAFT COCKTAILS",
    items: [
      { name: "Ming's Negroni", price: "145k", description: "Sichuan pepper infused gin, Campari, sweet vermouth." },
      { name: "Dragon's Breath", price: "155k", description: "Smoked bourbon, ginger, honey, and star anise." },
      { name: "Lotus Martini", price: "140k", description: "Vodka, lychee, lotus root syrup, and rose water." }
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="menu-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">OUR SELECTIONS</h2>
          <p className="section-subtitle">A curation of the finest flavors from the Orient</p>
        </div>

        <div className="menu-grid">
          {menuData.map((cat, index) => (
            <div key={index} className="menu-category reveal" style={{ animationDelay: `${0.2 * index}s` }}>
              <h3 className="category-title">{cat.category}</h3>
              <div className="items-list">
                {cat.items.map((item, i) => (
                  <div key={i} className="menu-item">
                    <div className="item-header">
                      <h4 className="item-name">{item.name}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-cta reveal">
          <div className="menu-btns">
            <a href="https://drive.google.com/file/d/1isubGAGZtGl3pNrPdUdg3rmHRqkDM96w/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-outline">Food Menu</a>
            <a href="https://drive.google.com/file/d/16RwySeBCqjz_keiSp6k62K_Kz_8rsCDn/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-outline">Beverage Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
