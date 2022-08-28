import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTES
import Wellcome from './Componentes/Wellcome/Wellcome';
import ResponsiveAppBar from './Componentes/ResponsiveAppBar/ResponsiveAppBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';
 

function App() {

  return (
    <div className="App container mt-5">
    <Wellcome nombre="Estimado Cliente"/>
      <ResponsiveAppBar/>
      <ItemListContainer />
      <Footer/>
    </div>
  );
}

export default App;