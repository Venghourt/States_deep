import React from "react";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

// StuffForm component
function StuffForm({ onAddStuff }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !price) return; // Prevent adding empty items
    onAddStuff({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="stuff-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0"
      />
      <button type="submit">Add Stuff</button>
    </form>
  );
}

// StuffCard component
function StuffCard({ name, price }) {
  return (
    <div className="stuff-card">
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}

// Main App component
export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  const addStuff = (newStuff) => {
    setStuffs((prevStuffs) => [...prevStuffs, newStuff]);
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onAddStuff={addStuff} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}