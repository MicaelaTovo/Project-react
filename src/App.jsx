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
      <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
      <Route path='/checkout' element={<CheckoutContainer/>} />
    </Routes>
    </BrowserRouter>
</>
    );
  }
  
  export default App;
  











  // <BrowserRouter>
  //       <cartContext.Provider value={{ cartItems, setCartItems }}>
  //         <Navbar />
  //         <Routes>
  //           <Route exact path='/' element={<ItemListContainer greeting='Welcome to our store' />} />
  //           <Route path='/category/:categoryId' element={<ItemListContainer />} />
  //           <Route path='/itemDetail/:itemId' element={<ItemDetailContainer />} />
  //           <Route path='/cart' element={<Cart />} />
  //         </Routes>
  //       </cartContext.Provider>
  //     </BrowserRouter>
