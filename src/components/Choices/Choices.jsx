import React from 'react';
import './Choices.css';

export default function Choices({
  types,
  setType,
  selectedType,
  sort,
  setSort,
}) {
  return (
    <div className='choices-layout'>
      <label>
        <div>Sort Direction</div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value='asc'>ascending</option>
          <option value='desc'>descending</option>
        </select>
      </label>
      <label>
        <div>Type</div>
        <select value={selectedType} onChange={(e) => setType(e.target.value)}>
          <option>any</option>
          {types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
