import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contactez-moi !</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <div>
                <span>Voici un site</span>
              </div>
            </Route>
            <Route path="/contact">
              <div>
                <span>Vous pouvez me contacter par Teams</span>
              </div>
            </Route>
            <Route path="/">
              <div>
                <span>Y a rien à voir ici</span>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
