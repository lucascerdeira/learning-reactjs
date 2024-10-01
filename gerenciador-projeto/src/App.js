import './App.css';
// como se importa no react
import HelloWorld from './components/HelloWorld';

function App() {
const name = 'Lucas'


  function sum(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    
    <div className="App">
      <h1>Olá mundo! React</h1>
      <p>Olá {name}</p>
      <h2>Soma: {sum(12,3)}</h2>
      <img src={url} alt="minha imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;
