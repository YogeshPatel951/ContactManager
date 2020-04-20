import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import About from './components/pages/about';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import {Provider} from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import notFound from './components/pages/notFound';
import EditContact from './components/contacts/editContact';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="pb-3">
        <Header branding="Contact Manager"></Header>
        
        <div className="container">
          <Switch>
            <Route exact path='/' component={Contacts} ></Route>
            <Route exact path='/contact/add' component={AddContact} ></Route>
            <Route exact path='/contact/edit/:id' component={EditContact} ></Route>
            <Route exact path='/about' component={About} ></Route>
            <Route component={notFound}></Route>
          </Switch>

          
        </div>

        

      </div>
      
      </Router>
      </Provider>
    );
  }
}



export default App;
