import React, { useState } from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Register from './profile/Register';

const App = () => {

  return (
        <div> 
            <Router>
              <Switch>
                <Route exact path="/register" component={Register}/>
              </Switch>
            </Router>

        </div>
  );
}

export default App;
