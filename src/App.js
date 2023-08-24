import { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = "73c15879a44e7474893452435c1ab7612e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command})=>{
        if(command == 'test'){
          alert("yo!")
        }
      }
    })
  }, [])
  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
