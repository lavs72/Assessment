import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

function ProductForm({ onSave, onCancel, product }) {
  const [name, setName] = useState(product ? product.name : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [quantity, setQuantity] = useState(product ? product.quantity : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, category, price: parseFloat(price), quantity: parseInt(quantity) });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default ProductForm;