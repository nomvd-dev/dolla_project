import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/dolla_project' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
