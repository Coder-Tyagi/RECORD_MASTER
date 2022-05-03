import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Setting from './Setting.js';
import Dashboard from './Dashboard.js';
import {BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/setting" component={Setting} />
      </Switch>
</Router>

    </div>
   

   
  );
}

export default App;
