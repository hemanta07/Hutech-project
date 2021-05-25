import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Theme from "./Theme";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home}/>
      <Route exact path="/theme" component={Theme} />
      </Switch>
  </>
  );
}

export default App;
