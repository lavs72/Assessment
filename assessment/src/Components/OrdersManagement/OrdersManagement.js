import React, { useState } from 'react';
import './OrdersManagement.css';

const OrdersManagement = () => {

  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Arun', orderDate: '2024-03-09', status: 'Processing', details: 'Arun order is processing' },
    { id: 2, customerName: 'Priya', orderDate: '2024-03-08', status: 'Delivered', details: 'Priya order is delivered' },
    { id: 3, customerName: 'Swetha', orderDate: '2024-03-07', status: 'Processing', details: 'Swetha order is Processing' },
    { id: 4, customerName: 'Bhavya', orderDate: '2024-03-12', status: 'Processing', details: ' Bhavya order is Processing' },
  
  ]);

  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };


  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  }
  const displayOrderDetails = (orderId) => {
    const selectedOrder = orders.find(order => order.id === orderId);
    if (selectedOrder) {
      alert(selectedOrder.details);
    }
  };

  return (
    <div class="OrdersManagement">
      <h1>Orders Management</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
              
                <button onClick={() => displayOrderDetails(order.id)}>View Details</button>
          
                <button onClick={() => updateOrderStatus(order.id, 'New Status')}>Update Status</button>
  
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default OrdersManagement;