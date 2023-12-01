import React, { useState } from 'react';
import './KFCmenu.css';
import NavBar from './NavBar';

const KFCMenu = () => {
  const [order, setOrder] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: 'Original Recipe Chicken',
      price: 52000,
      image: 'https://copykat.com/wp-content/uploads/2021/07/KFC-Fried-Chicken-Photo-2.jpg',
      description: 'Our classic Original Recipe Chicken is seasoned to perfection.',
    },
    {
      id: 2,
      name: 'Hot Wings',
      price: 45000,
      image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2023/02/www-kfc-com-menu-fried-798819150.jpg',
      description: 'Spicy and flavorful Hot Wings for a fiery kick.',
    },
    {
      id: 4,
      name: 'Famous Bowl',
      price: 69000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-EkIO_BVRiFZLGHUTwg_Ky1_8KhYJSaHN9XI35_9_c61oIB_AcY-csHwRGPLL2cVcXU&usqp=CAU',
      description: 'The Famous Bowl is a delicious combination of flavors in every bite.',
    },
    {
      id: 5,
      name: 'Zinger Burger',
      price: 34000,
      image: 'data:image/jpeg;base64,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',
      description: 'Enjoy the bold taste of our Zinger Burger with a spicy kick.',
    },
    // Add more items as needed
  ];

  const addItemToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
  };

  const removeItemFromOrder = (itemId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
      <div className='menu2'>
        <NavBar/>
            <div className='menu'>
      
      <h1 className='heading-menu'>KFC Menu</h1>
      <div className="menu-section">
        <h2>Menu Items</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>shs. {item.price.toFixed(2)}</p>
              <p>{item.description}</p>
              <button onClick={() => addItemToOrder(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="order-section">
        <h2>Cart</h2>
        <ul>
          {order.map((item) => (
            <li key={item.id}>
              {item.name} - shs.{item.price.toFixed(2)}
              <button onClick={() => removeItemFromOrder(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: shs.{calculateTotal()}</p>
      </div>
    </div>
      </div>
  );
};

export default KFCMenu;
