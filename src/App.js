import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTES
import Wellcome from './Componentes/Wellcome/Wellcome';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
//import ItemDetail from './Componentes/ItemDetail/ItemDetail'; 
import Footer from './Componentes/Footer/Footer';
import ItemList from './Componentes/ItemList/ItemList';

 

function App() {

  return (
    <>
    <div className="App container mt-5">
    <Wellcome nombre="Estimado Cliente"/>
    <Navbar/>
    {/* <ItemDetailContainer/>
    <ItemDetail/> */}
    <ItemListContainer />
    <ItemList/>
    <Footer/>
    </div> 
    </>    
  );
}

export default App;