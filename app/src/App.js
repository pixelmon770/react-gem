import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header'
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Main/>
      <Menu/>
    </div>
  );
}

export default App;
