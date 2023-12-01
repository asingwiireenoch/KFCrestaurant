import { Link } from 'react-router-dom';
import './KFCpage.css'; // Create a new CSS file for KFC styles
import React from 'react';
import NavBar from './NavBar';

function KFCPage() {
  return (
    <div className='KFCpage'>
      <NavBar />
      <div className='Container'>
        <div className='kfc'>
          <img
            className='img1'
            src='https://cdn.grabon.in/gograbon/images/merchant/1536747990676.png'
            alt='KFC Food Image'
          />
        </div>
        <div className='Heading'>
          <h3 className='heading3'>Welcome to KFC</h3>
          <p>
            "Savor the iconic flavors at KFC, where every bite is a journey of
            deliciousness. Indulge in our legendary fried chicken and experience
            the taste that has captivated millions around the globe. Welcome to
            a world where crispy meets perfection, and every meal is a feast for
            the senses."
          </p>
          <Link to='/SignUp'>
            <button className='signUp'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KFCPage;
