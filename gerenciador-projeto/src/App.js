import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = "Teste"

  return (
    
    <div className="App">
      <h1>testantando o css</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Lucas"/>
      <SayMyName nome="Nat" />
      <SayMyName nome={name} />
      <Pessoa name="Lucas" 
      idade="28" 
      profession="Assistente de Desenvolvimento" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
