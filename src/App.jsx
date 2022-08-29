import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  const onAdd = (quantity) => {
    (console.log(`Agrego ${quantity} productos al carrito`));
  }
  
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
        <ItemListContainer greeting= 'Agreue o reste productos:' />
        <ItemCount stock={20} initial={1} onAdd={onAdd} />
        </header>
      </div>
    );
  }
  
  export default App;
  