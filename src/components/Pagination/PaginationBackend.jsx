import React, { useEffect, useState } from "react";
import "../../style.css";

const PaginationBackend = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      const data = await res.json();
      if (data.products.length > 0) {
        setProducts(data.products);
        setTotalPages(data.total / 10);
      }
      console.log(data);
    })();
  }, [page]);

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.map((product) => (
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
          {[...Array(totalPages)].map((_, i) => (
            <span
              onClick={() => handleClick(i + 1)}
              className={page === i + 1 ? "page__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          {totalPages === page ? null : (
            <span onClick={() => setPage((prev) => prev + 1)}>→</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PaginationBackend;
