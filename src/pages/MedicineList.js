import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MedicineList.css';
import amx from '../assets/imgs/amx.jpeg';
import dolo from '../assets/imgs/dolo.avif';
import cet from '../assets/imgs/cet.webp';
import ibu from '../assets/imgs/ibu.jpg';
import para from '../assets/imgs/parac.webp';

const MedicineList = () => {
  const [medicines] = useState([
    { id: 1, name: 'Paracetamol', description: 'Pain reliever and fever reducer', price: 15, image: para },
    { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory pain reliever', price: 30, image: ibu },
    { id: 3, name: 'Cetirizine', description: 'Antihistamine for allergies', price: 25, image: cet },
    { id: 4, name: 'Amoxicillin', description: 'Antibiotic for bacterial infections', price: 80, image: amx },
    { id: 5, name: 'Dolo 650', description: 'Fever and pain relief', price: 20, image: dolo }
  ]);

  const [showCart, setShowCart] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const isLoggedIn = !!localStorage.getItem('currentUser');

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (medicine) => {
    if (!isLoggedIn) {
      alert('Please login to add items to your cart!');
      return;
    }
    setCart([...cart, medicine]);
    setAddedItem(medicine.id);
    setCartPulse(true);
    setTimeout(() => setAddedItem(null), 500);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (cartPulse) {
      const timer = setTimeout(() => setCartPulse(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartPulse]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="medicine-app container-fluid py-4">
      <header className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <h1 className="display-4 text-primary fw-bold">Med Pharmacy</h1>
        <button 
          className={`btn btn-primary position-relative ${cartPulse ? 'pulse' : ''}`}
          onClick={() => setShowCart(!showCart)}
        >
          <i className="bi bi-cart3 me-2"></i>Cart
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      <div className="content">
        {!showCart ? (
          <div className="medicine-list">
            <h2 className="text-center mb-4">Available Medicines</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {medicines.map(medicine => (
                <div key={medicine.id} className="col">
                  <div className={`card h-100 shadow-sm ${addedItem === medicine.id ? 'border-success' : ''}`}>
                    <div className="card-img-top medicine-image d-flex justify-content-center align-items-center p-3">
                      <img 
                        src={medicine.image} 
                        alt={medicine.name}
                        className="img-fluid"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.parentNode.querySelector('.medicine-fallback') || document.createElement('span');
                          fallback.className = 'medicine-fallback display-4';
                          fallback.textContent = '💊';
                          if (!e.target.parentNode.contains(fallback)) {
                            e.target.parentNode.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title h5">{medicine.name}</h3>
                      <p className="card-text text-muted">{medicine.description}</p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="h5 text-success mb-0">₹{medicine.price}</span>
                          <button 
                            onClick={() => addToCart(medicine)} 
                            className="btn btn-success btn-sm"
                            disabled={!isLoggedIn}
                          >
                            <i className="bi bi-cart-plus me-1"></i> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="cart-view bg-white rounded-3 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Your Cart</h2>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setShowCart(false)}
              >
                <i className="bi bi-arrow-left me-1"></i> Back to Medicines
              </button>
            </div>
            
            {cart.length === 0 ? (
              <div className="empty-cart text-center py-5">
                <div className="display-1 text-muted mb-3">
                  <i className="bi bi-cart-x"></i>
                </div>
                <h3 className="h4 text-muted mb-3">Your cart is empty</h3>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowCart(false)}
                >
                  <i className="bi bi-prescription me-1"></i> Browse Medicines
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-2 d-flex align-items-center justify-content-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="img-fluid rounded-start"
                            style={{maxHeight: '80px', objectFit: 'contain'}}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text text-success fw-bold mb-0">₹{item.price}</p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-end pe-3">
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="btn btn-outline-danger btn-sm"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-summary border-top pt-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Total:</h4>
                    <h4 className="mb-0 text-success">₹{totalAmount}</h4>
                  </div>
                  <button 
                    className="btn btn-primary w-100 py-2"
                    onClick={() => {
                      const productList = cart.map(item => `${item.name} (₹${item.price})`).join('\n');
                      alert(`🧾 Checkout Summary:\n\n${productList}\n\nTotal: ₹${totalAmount}`);
                    }}
                  >
                    <i className="bi bi-credit-card me-2"></i> Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineList;