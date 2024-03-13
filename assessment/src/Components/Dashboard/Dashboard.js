import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalProducts: 0,
            totalOrders: 0
        };
    }

    componentDidMount() {
        // Fetch data and update state with actual metrics
        this.setState({
            totalProducts: 100,
            totalOrders: 50
        });
    }

    render() {
        const { totalProducts, totalOrders } = this.state;

        return (
            <div className="dashboard-container">
                <h1 className="dashboard-header">Dashboard</h1>
                <div className="key-metrics">
                    <h3>Key Metrics:</h3>
                    <h3>Total number of products: {totalProducts}</h3>
                    <h3>Total number of orders: {totalOrders}</h3>
                </div>
                <div className="quick-navigation">
                    <Link to="/products">
                        <button>Manage Products</button>
                    </Link>
                    <Link to="/orders">
                        <button>Manage Orders</button>
                    </Link>
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;