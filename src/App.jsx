import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer/ItemDetailContainer';


function App() {

    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
        {/* <ItemListContainer greeting= '' /> */}
        <ItemDetailContainer />
        </header>
      </div>
    );
  }
  
  export default App;
  