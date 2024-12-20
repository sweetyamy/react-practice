import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  // Toggles the 'checked' state when the checkbox is clicked
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Checkbox to toggle between 'all products' and 'sale products' */}
      <input
        id='checkbox'
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only Hot Sale</label>

      {/* Display the list of products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
