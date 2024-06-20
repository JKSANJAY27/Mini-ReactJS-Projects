import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}
      {/* Load more products component */}
      {/* <LoadMoreData /> */}
      {/* Tree View Component/ menu UI component/ recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}
      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}
      {/* Light and Dark Theme Switch */}
      {/* <LightDarkMode /> */}
      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* Custom tabs component */}
      {/* <TabTest /> */}
      {/* Custom Model Component */}
      {/* <ModalTest /> */}
      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}
      {/* Search AutoComplete */}
      {/* <SearchAutoComplete /> */}
      {/* Tic Tac Toe */}
      {/* <TicTacToe /> */}
      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* useFetch - Custom Hook */}
      {/* <UseFetchHookTest /> */}
      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}
      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}
      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom /> */}
      {/* Scroll to a Particular Section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
