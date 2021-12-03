import React from 'react';

export default function Choices({
  types,
  setType,
  selectedType,
  sort,
  setSort,
}) {
  return (
    <div>
      <select value={selectedType} onChange={(e) => setType(e.target.value)}>
        <option>any</option>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value='asc'>ascending</option>
        <option value='desc'>descending</option>
      </select>
    </div>
  );
}
