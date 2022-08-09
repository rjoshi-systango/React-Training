import './App.css';
import ClickCounter from './components/ClickCounter';
// import UpdatedComponent from './components/HOC/withCounter';
import OverCounter from './components/OverCounter';

function App() {
  return (
    <div className="App">
        <ClickCounter />
        <OverCounter />

    </div>
  );
}

export default App;
