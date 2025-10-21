import React, { useState } from "react";
import recipes from "./recipes";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const handleOrder = (recipe) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: 'Add to Cart?',
      text: `Add ${recipe.title} to your cart?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, add it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(prevCart => [...prevCart, recipe]);
        swalWithBootstrapButtons.fire(
          'Added!',
          `${recipe.title} has been added to your cart.`,
          'success'
        );
      }
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="menu-page">
      <div className="menu-container">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <div className="cart-info">
            <span>Items in cart: {cart.length}</span>
            {cart.length > 0 && (
              <span>Total: ${getTotalPrice()}</span>
            )}
          </div>
        </div>
        
        <div className="menu-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-item">
              <img src={recipe.image} alt={recipe.title} />
              <div className="menu-content">
                <div className="item-header">
                  <h3>{recipe.title}</h3>
                  <span className="price">${recipe.price}</span>
                </div>
                <p className="description">{recipe.description}</p>
                <button 
                  className="order-btn" 
                  onClick={() => handleOrder(recipe)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {cart.length > 0 && (
          <div className="checkout-section">
            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <strong>Total: ${getTotalPrice()}</strong>
              </div>
            </div>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
