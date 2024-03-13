import React, { useState } from 'react';
import ProductForm from './ProductForm';
import './ProductsManagement.css';

const initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 10, quantity: 100 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 20, quantity: 200 },
  { id: 3, name: 'Product 3', category: 'Category 1', price: 30, quantity: 300 },
];

function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  const handleSave = (product) => {
    if (editing) {
      setProducts(products.map(p => (p.id === editing.id ? { ...p, ...product } : p)));
      setEditing(null);
    } else {
      setProducts([...products, { id: Date.now(), ...product }]);
    }
  };
  const handleEdit = (id) => {
    setEditing(products.find(product => product.id === id));
  };

  const handleAdd = () => {
    const newProduct = {
      id: products.length + 1,
      name,
      category,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    setProducts([...products, newProduct]);
    setName('');
    setCategory('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="products-container">
      <h1 className="products-header">Products Management</h1>

      <div className="edit-product-section">
        <h2>Edit Product</h2>
        {editing ? (
          <ProductForm onSave={handleSave} product={editing} />
        ) : (
          <button onClick={() => setEditing({})}>Edit Product</button>
        )}
      </div>

      <div className="products-list">
        <h2>List of Products</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-product-form">
        <h2>Add Product</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Products;