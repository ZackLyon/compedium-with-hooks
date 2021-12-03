import React from 'react';

export default function Choices({ types, setType, selectedType }) {
  return (
    <div>
      <select value={selectedType} onChange={(e) => setType(e.target.value)}>
        <option>any</option>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
