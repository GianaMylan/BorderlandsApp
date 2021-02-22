import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Characters from './components/Characters';
import Creatures from './components/Creatures';
import Bosses from './components/Bosses';

function App() {
  return (
    <Router>
        <nav>
          <ul>  
            <Link className="Link" to="/"> Home </Link> | 
            <Link className="Link" to="Characters"> Characters</Link> |
            <Link className="Link" to="Bosses"> Bosses</Link> |
            <Link className="Link" to="Creatures"> Creatures </Link> |
          </ul>
          <div className="searchBar">
            <input type="text" /> 
            <button> Search </button>
          </div>

        </nav>
        <Switch>
          <Route path="/Bosses" exact component={Bosses} />
          <Route path="/Creatures" exact component={Creatures} />
          <Route path="/Characters" exact component={Characters} />
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>

  );

  function Home() {
    return (  
        <header>

          <div>
            <p> this is the home page </p>
          </div>
        </header>

    )
  }
} // end of the main App 


export default App;
