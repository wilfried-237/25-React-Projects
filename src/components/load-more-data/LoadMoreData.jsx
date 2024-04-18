import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import reactLogo from "../../assets/react.svg";

function LoadMoreData() {
  const [skip, setSkip] = useState(10);
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(getSkip) {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${getSkip}&select=title,price,images`
      );
      const data = await response.json();
      const newData = data.products;

      if (data) {
        setGetData(newData);
        setIsLoading(false);
      }

      console.log(getData);

    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    if (skip >= 10) {
    setIsLoading(true);
      fetchData(skip);
    }

    return () => {
      setIsLoading(false);
    };
  }, [skip]);

  if (isLoading) {
    return <div>Loading data please Wait...</div>;
  }

  if (error !== null) {
    return <div>An Error Occured ! {error}</div>;
  }

  function loadMore() {
    setSkip(() => (skip + 10 > 100 ? 10 : skip + 10));
  }

  return (
    <>
      <div className="loadMoreDiv">
        <div className="productsDiv">
          {
            getData.length !== 0?
             getData.map((cardItem, index) => {
                return(
                    <ItemCard key={index} images={cardItem.images} title={cardItem.title} price={cardItem.price} /> 
                ) 
              })
            : <div>No Data Available...</div>
            }
        </div>

        <div className="btnDiv">
          <button onClick={() => loadMore()}>Load More Products</button>
        </div>
      </div>
    </>
  )
}

export default LoadMoreData;
