import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';




function App() {

    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
        <ItemListContainer greeting= 'Agregue o reste productos:' />
        </header>
      </div>
    );
  }
  
  export default App;
  