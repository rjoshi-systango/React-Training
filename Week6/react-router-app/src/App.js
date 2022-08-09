import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import './App.css';
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductDetails from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to='/welcome'>Welcome Page </NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product Page </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path='/product' exact>
          <Product />
        </Route>
        <Route path='/product/:productId/'>
          <ProductDetails />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
