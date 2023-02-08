import {useState} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false)

  const toggle = () => {
    setStartQuiz(prevVal => !prevVal)
  }
  return (
    <div className="App">
     {startQuiz ?
     <Card/> :
     <div className='start-card'>
        <h2>Welcome to the Music Quiz</h2>
        <h4>Click the button below to start</h4>
        <button onClick={toggle}>BEGIN</button>
      </div>}
    </div>
  );
}

export default App;
