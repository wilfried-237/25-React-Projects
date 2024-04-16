import Accordion from "./components/accordion/Accordion"
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator"
import StarRating from "./components/star-rating/StarRating"
import ImageSlider from "./image-slider/ImageSlider"


function App() {

  return (
    <>
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    <StarRating />
    <RandomColorGenerator />
    <Accordion />
    </>
  )
}

export default App
