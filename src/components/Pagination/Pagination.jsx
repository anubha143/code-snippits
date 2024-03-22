import React, { useEffect, useState } from "react";
import "../../style.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data.products.length > 0) {
        setProducts(data.products);
      }
      console.log(data);
    })();
  }, []);

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => (
            <span className="product__single" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          {page <= 1 ? null : (
            <span onClick={() => setPage((prev) => prev - 1)}>←</span>
          )}
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              onClick={() => handleClick(i + 1)}
              className={page === i + 1 ? "page__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          {products.length / 10 === page ? null : (
            <span onClick={() => setPage((prev) => prev + 1)}>→</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
