import logo from './logo.svg';
import './App.css';
import ObjectForm from './ObjectForm';
import ObjectList from './ObjectList';

function App() {
  const objects = ['Object 1', 'Object 2', 'Object 3'];
  return (
    <div className="App">
      <ObjectForm />
      <ObjectList objects={objects} />
    </div>
  );
}

export default App;
