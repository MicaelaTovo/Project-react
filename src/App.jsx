import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './Components/Container/HomeContainer/HomeContainer';
import CheckoutContainer from './Components/Container/CheckoutContainer/CheckoutContainer';


function App() {

    return (
<>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomeContainer/>} />
      <Route path='/productos' element={<ItemListContainer greeting = ""/>} />
      <Route path='/categoria/:idCategorias' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/checkout' element={<CheckoutContainer/>} />

    </Routes>
    </BrowserRouter>
</>
    //   <div className="App">
    //     <NavBar/>
    //     <header className="App-header">
    //     {/* <ItemListContainer greeting= '' /> */}
    //     <ItemDetailContainer />
    //     </header>
    //   </div>
    );
  }
  
  export default App;
  