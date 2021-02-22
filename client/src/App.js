import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Characters from './components/Characters';

function App() {
  return (
    <Router>
        <nav>
          <ul>  
            <Link className="Link" to="/"> Home </Link>
            <Link className="Link" to="Characters"> Characters</Link>
            <Link className="Link" to="Bosses"> Bosses</Link>
            <Link className="Link" to="Creatures"> Creatures </Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/Characters" exact component={Characters} />
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>

  );

  function Home() {
    return (
      <div>
        <p> this is the home page </p>
      </div>
    )
  }
} // end of the main App 


export default App;
