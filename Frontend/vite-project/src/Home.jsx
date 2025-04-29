import React, { useState } from 'react';
import './components/home.css'; // Link to your CSS

const Home = () => {
  const [data, setData] = useState([]); // Store the data (simulating a database)
  const [input, setInput] = useState(''); // To capture the input
  const [editIndex, setEditIndex] = useState(null); // To track which item is being edited

  // Create or update an item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    if (editIndex !== null) {
      // Update item
      const updatedData = [...data];
      updatedData[editIndex] = input;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Create item
      setData([...data, input]);
    }

    setInput('');
  };

  // Edit an item
  const handleEdit = (index) => {
    setInput(data[index]);
    setEditIndex(index);
  };

  // Delete an item
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="crud-container">
      <h1>To Do List</h1>

      {/* Form to add or edit item */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new item"
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <h2>Items List</h2>
      {/* Display list of items */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div className="buttons">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
