import Accordion from "./components/accordion/Accordion"
import LoadMoreData from "./components/load-more-data/LoadMoreData"
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator"
import StarRating from "./components/star-rating/StarRating"
import ImageSlider from "./image-slider/ImageSlider"



function App() {

  return (
    <>
    <LoadMoreData />
    <StarRating number={10} />
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    <RandomColorGenerator />
    <Accordion />
    </>
  )
}

export default App
