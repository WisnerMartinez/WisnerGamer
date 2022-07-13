import './App.css';
import NavbarApp from './components/NabvarApp/NavbarApp';
import SliderApp from './components/SliderAPP/SliderApp';
import ParagraphApp from './components/ParagraphAPP/ParagraphApp';
import CardsApp from './components/CardsAPP/CardsApp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavbarApp/>
     <SliderApp/>
     <ParagraphApp/>
     <CardsApp/>
      
    </div>
  );
}

export default App;
