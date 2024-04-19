import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

function ImageSlider(url) {
  const [images, setImages] = useState([]);
  const [currrentSlide, setCurrentSlide] = useState(0);
  const [erroMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(
        `${getUrl}?page=${url.page}&limit=${url.limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    if (url.url !== "") {
      fetchImages(url.url);
    }

    return () => {
      setLoading(false);
    };
  }, [url.url]);

  if (loading) {
    return <div>Loading data please Wait...</div>;
  }

  if (erroMsg !== null) {
    return <div>An Error Occured ! {erroMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(
      currrentSlide === 0 ? images.length - 1 : currrentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currrentSlide === images.length - 1 ? 0 : currrentSlide + 1
    );
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <BsArrowLeftCircleFill
          className="previous slider-btn"
          onClick={() => handlePrevious()}
        />

        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                className={
                  currrentSlide == index
                    ? "active slider-img"
                    : "inactive slider-img"
                }
                alt={imageItem.url}
              />
            ))
          : null}

        <BsArrowRightCircleFill
          className="next slider-btn"
          onClick={() => handleNext()}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
