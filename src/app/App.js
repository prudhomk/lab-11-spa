import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import StrongPage from '../strong/StrongPage';
import StrongDetail from '../detail/StrongDetail';
import AddBeingPage from '../add-being/AddBeingPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/strongest" exact={true}
                render={routerProps => (
                  <StrongPage {...routerProps}/>
                )}
              />

              <Route path="/strongest/add" exact={true}
                render={routerProps => (
                  <AddBeingPage {...routerProps}/>
                )}
              />  

              <Route path="/strongest/:id"
                render={routerProps => (
                  <StrongDetail {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
