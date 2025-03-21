import React from "react";

// Sample orders data
const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

// OrderCard component
function OrderCard({ index, product, price, quantity, onUpdateQuantity }) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0; // Ensure it's a number
    onUpdateQuantity(index, newQuantity); // Call the update function
  };

  return (
    <div className="order-card">
      <h2>{product}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>
        Quantity:{" "}
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="0"
        />
      </p>
      <p>Total: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
}

// CheckoutButton component
function CheckoutButton({ total }) {
  return (
    <div className="checkout">
      <h2>Total: ${total}</h2>
      <button>Checkout</button>
    </div>
  );
}

// Main App component
export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];
      updatedOrders[index].quantity = newQuantity;
      return updatedOrders;
    });
  };

  // Calculate the total price for all orders
  const total = orders
    .reduce((acc, order) => acc + order.price * order.quantity, 0)
    .toFixed(2);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            index={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onUpdateQuantity={updateQuantity} // Pass the update function
          />
        ))}
      </div>

      <CheckoutButton total={total} /> {/* Pass the total to CheckoutButton */}
    </>
  );
}