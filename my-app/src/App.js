
import Topbar from './Topbar/Topbar';
import Banner from './Banner/Banner';
import './App.css';
import Categories from './Categories/Categories';
import Bestdeals from './Bestdeals/Bestdeals';
import Footer from './Footer/Footer';
import Mobile from './Mobile/Mobile';
import Popular from './Popular/Popular';
import Computer from './Computer/Computer';
import Featured from './Featured/Featured';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Banner/>
      <Categories/>
      <Bestdeals/>
      <Footer/>
      <Mobile/>
      <Popular/>
      <Computer/>
      <Featured/>

 
    </div>
  );
}

export default App;
