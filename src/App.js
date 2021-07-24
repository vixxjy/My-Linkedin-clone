import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/home">
              <Home/>
              <Header/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
