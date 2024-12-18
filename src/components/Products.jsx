import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setPRoducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        setPRoducts(data);
      });
    return () => {
      console.log('clean');
    };
  }, []);
  return (
    <>
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
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
