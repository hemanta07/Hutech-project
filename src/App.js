import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home}/>
      </Switch>
  </>
  );
}

export default App;
