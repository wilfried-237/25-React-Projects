import Accordion from "./components/accordion/Accordion"
import LoadMoreData from "./components/load-more-data/LoadMoreData"
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator"
import StarRating from "./components/star-rating/StarRating"
import ImageSlider from "./components/image-slider/ImageSlider"
import TreeView from "./components/tree-view/TreeView"
import data from "./components/tree-view/data"
import QrCodeGenerator from "./components/QR Code Generator/QrCodeGenerator"
import LightDarkMode from "./components/Light-Dark-Mode/LightDarkMode"
import ScrollIndicator from "./components/Scroll-Indicator/ScrollIndicator"
import CustomTab from "./components/Custom-Tab/CustomTab"
import ModalPopup from "./components/Modal Popup/ModalPopup"
import GihubProfileFinder from "./components/Github-Profile-Finder/GithubProfileFinder"
import SearchAutoComplete from "./components/Search-Auto-Complete-API/SearchAutoComplete"
import TicTacToe from "./components/Tic-Tac-Toe/TicTacToe"
import UseFetchHookTest from "./components/use-fetch-hook/UseFetchHookTest"
import UseOutsideTest from "./components/use-outside-click/UseOutsideTest"
import WindowsResize from "./components/windows-resize/WindowsResize"


function App() {

  return (
    <>
    <WindowsResize />
    <UseOutsideTest />
    <UseFetchHookTest />
    <TicTacToe />
    <SearchAutoComplete />
    <GihubProfileFinder />
    <ModalPopup />
    <CustomTab />
    <ScrollIndicator />
    <LightDarkMode />
    <QrCodeGenerator />
    <TreeView data={data} />
    <LoadMoreData />
    <StarRating number={10} />
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    <RandomColorGenerator />
    <Accordion />
    </>
  )
}

export default App
