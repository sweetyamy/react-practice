import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // State to hold the list of products
  const [products, setProducts] = useState([]);
  // State to manage the checkbox status
  const [checked, setChecked] = useState(false);

  // Toggles the 'checked' state when the checkbox is clicked
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // Fetch product data
    // If the checkbox is checked, fetch 'sale_product.json', otherwise fetch 'product.json'
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        console.log('data:', data); // Log the fetched data to the console
        setProducts(data); // Update the products state with the fetched data
      })
      .catch((e) => setError('Error!'))
      .finally(() => setLoading(false));

    // Cleanup function runs when the component unmounts or 'checked' changes
    return () => {
      console.log('clean'); // Log 'clean' to indicate cleanup
    };
  }, [checked]); // Dependency: Re-run fetch when 'checked' changes

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
