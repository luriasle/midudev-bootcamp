import './App.css';
import Mensaje from './components/Mensaje'

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso fullstack'/>
      <Mensaje color='yellow' message='De React'/>
    </div>
  );
}

export default App;
