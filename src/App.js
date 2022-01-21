import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Characters from './Components/Characters/Characters';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Characters />
    </div>
  );
}

export default App;
