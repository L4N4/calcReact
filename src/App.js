import './assets/App.css';
import Columns from './components/Columns';

function App() {
  return (
      <div className="App">
          <h1>Calculadora</h1> {/* header */}
          <Columns /> {/* columnas para generar una grilla y centrar contenido */}
      </div>
  );
}

export default App;