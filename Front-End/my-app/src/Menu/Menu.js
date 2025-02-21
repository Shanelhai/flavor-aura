import React, { useState } from 'react';
import Menudata from './Menudata'; // Assuming this file has the list of menu items
import Form from './Button/Form';
import './Menu.css';
import Footer from '../Footer/Footer';

const Menu = () => {
  const [items, setItems] = useState(Menudata.filter(item => item.category === 'Vegetarian')); 
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items for the form

  // Filter function based on category
  const filterItem = (category) => {
    const filteredItems = Menudata.filter(item => item.category === category);
    setItems(filteredItems);
  };

  // Handle checkbox change
  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems(prevItems => [...prevItems, item]);
    } else {
      setSelectedItems(prevItems => prevItems.filter(selectedItem => selectedItem.id !== item.id));
    }
  };

  return (
    <>
      <div className="menu-container">
      <div className="menu-tab">
        {/* Buttons to filter by category */}
        <button className="btn btn-warning" onClick={() => filterItem('Vegetarian')}>Vegetarian</button>
        <button className="btn btn-warning" onClick={() => filterItem('Non-Vegetarian')}>Non-Vegetarian</button>
        <button className="btn btn-warning" onClick={() => filterItem('Bread')}>Bread</button>
        <button className="btn btn-warning" onClick={() => filterItem('Dessert')}>Desserts</button>
        <button className="btn btn-warning" onClick={() => filterItem('Beverage')}>Beverages</button>
        <button className="btn btn-warning" onClick={() => filterItem('Ice Cream')}>Ice Cream</button>
      </div>

      <div className="gallery-container">
        <div className="gallery">
          {/* Display filtered menu items */}
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="food-card">
                <img src={item.image} alt={item.name} className="food-image" />
                <h2 className="food-name">{item.name}</h2>
                <p className="food-category">{item.category}</p>
                <p className="food-price">Price: {item.price}</p>
                <p className="food-description">{item.description}</p>

                {/* Checkbox to select the item */}
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`} 
                  checked={selectedItems.some(selectedItem => selectedItem.id === item.id)} 
                  onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                />
                <label htmlFor={`checkbox-${item.id}`} className='book'>Select this item</label>
              </div>
            ))
          ) : (
            <p>No items found for this category.</p>
          )}
        </div>
      </div>

      {/* Pass selected items to the form */}
      <Form selectedItems={selectedItems} />
    </div>
    <Footer />
    </>
  );
};

export default Menu;
