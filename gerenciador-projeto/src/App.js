import './App.css';

function App() {
const name = 'Lucas'


  function sum(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    // no retorno só pode ter um elemento pai, se tirar a div principal vai dar erro
    <div className="App">
      <h1>Olá mundo! React</h1>
      <p>Olá {name}</p>
      <h2>Soma: {sum(12,3)}</h2>
      <img src={url} alt="minha imagem"/>
    </div>
  );
}

export default App;
