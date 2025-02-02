import React, { useState } from 'react';
import axios from 'axios';

const SearchResults = () => {
  const [type, setType] = useState('restaurant');
  const [results, setResults] = useState([]);

  const search = async () => {
    const location = '37.7749,-122.4194'; // Example: San Francisco
    try {
      const response = await axios.get(`http://localhost:5000/api/search`, {
        params: { type, location },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Cultural Discovery Portal</h1>
      <div className="flex gap-4 mb-6">
        <select 
          className="p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="restaurant">Food</option>
          <option value="clothing_store">Clothing</option>
          <option value="temple">Temples</option>
          <option value="store">Decor Vendors</option>
        </select>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={search}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((place, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">{place.name}</h3>
            <p>{place.vicinity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

