import './App.css';
import { Route } from "react-router-dom"
import IsItHot from './IsItHot/IsItHot';

function App() {
  return (
    <div className="App">
      
      <Route path="/">
        <IsItHot />
      </Route>

    </div>
  );
}

export default App;
