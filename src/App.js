import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/Nav';


function App() {
  
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
  
          </Switch>
        </Router>
        </Layout>
        
      </React.Fragment>
  
  );
}


export default App;
