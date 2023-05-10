import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;