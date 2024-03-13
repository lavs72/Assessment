import React, { useState } from 'react';
import './OrdersCalendarView.css';

const OrderDeliveryCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);

  // Updated simulated order data with status
  const orders = [
    { date: '2024-03-09', details: 'Order 1: Due for delivery', status: 'pending' },
    { date: '2024-03-12', details: 'Order 2: Due for delivery', status: 'delivered' },
    { date: '2024-03-12', details: 'Order 3: Due for delivery', status: 'pending' },
    { date: '2024-03-01', details: 'Order 1: Due for delivery', status: 'pending' },
    { date: '2024-03-04', details: 'Order 2: Due for delivery', status: 'delivered' },
    { date: '2024-03-30', details: 'Order 2: Due for delivery', status: 'pending' },
    { date: '2024-03-18', details: 'Order 2: Due for delivery', status: 'pending' },
    { date: '2024-03-27', details: 'Order 2: Due for delivery', status: 'delivered' },
    { date: '2024-03-27', details: 'Order 1: Due for delivery', status: 'pending' },
    // Add more orders as needed
  ];

  const handleDateClick = (day) => {
    const clickedDate = `2024-03-${day < 10 ? '0' + day : day}`;
    setSelectedDate(clickedDate);
    const ordersOnDate = orders.filter((order) => order.date === clickedDate);
    setOrdersForSelectedDate(ordersOnDate);
  };

  return (
    <div className="order-delivery-calendar">
      <h1>Order Delivery Calendar</h1>
      <div className="calendar">
        {[...Array(31).keys()].map((day) => (
          <div
            key={day + 1}
            className={`day ${selectedDate === `2024-03-${day + 1 < 10 ? '0' + (day + 1) : day + 1}` ? 'selected' : ''}`}
            onClick={() => handleDateClick(day + 1)}
          >
            {day + 1}
          </div>
        ))}
      </div>
      <div className="order-details">
        {selectedDate && (
          <div>
            <h2>Orders for {selectedDate}</h2>
            {ordersForSelectedDate.length > 0 ? (
              ordersForSelectedDate.map((order, index) => (
                <p key={index}>
                  {order.details} - Status: {order.status}
                </p>
              ))
            ) : (
              <p>No orders due for delivery on this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDeliveryCalendar;