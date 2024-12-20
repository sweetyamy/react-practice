import { useState, useEffect } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // Fetch product data
    // If the checkbox is checked, fetch 'sale_product.json', otherwise fetch 'product.json'
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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
  }, [salesOnly]); // Dependency: Re-run fetch when 'checked' changes

  return [loading, error, products];
}
