import Accordion from "./components/accordion/Accordion"
import LoadMoreData from "./components/load-more-data/LoadMoreData"
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator"
import StarRating from "./components/star-rating/StarRating"
import ImageSlider from "./components/image-slider/ImageSlider"
import TreeView from "./components/tree-view/TreeView"
import data from "./components/tree-view/data"
import QrCodeGenerator from "./components/QR Code Generator/QrCodeGenerator"
import LightDarkMode from "./components/Light-Dark-Mode/LightDarkMode"


function App() {

  return (
    <>
    <LightDarkMode />
    {/* <QrCodeGenerator />
    <TreeView data={data} />
    <LoadMoreData />
    <StarRating number={10} />
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    <RandomColorGenerator />
    <Accordion /> */}
    </>
  )
}

export default App
