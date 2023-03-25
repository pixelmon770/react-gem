import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header'
import Menu from './components/Menu';
function App() {
  const data = [
    {
      nr: "1",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      time: "3:20",
    },
    {
      nr: "2",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      time: "3:20",
    },
    {
      nr: "3",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      time: "3:20",
    }

  ]

  return (
    <div className="App">
      <Nav/>
      <Header />
      <Main song = {data}/>
      <Menu/>
    </div>
  );
}

export default App;
