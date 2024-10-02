import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = "Teste"

  return (
    
    <div className="App">
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
