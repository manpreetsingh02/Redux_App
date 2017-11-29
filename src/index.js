import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import App from './App';
import Todos from './views/Todolist/index'

import { Provider } from 'react-redux'
import todoApp from './redux/reducer'
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(todoApp,compose(
      applyMiddleware(thunk),
    ))
ReactDOM.render(
	<Provider store={store}>
	<Router history={history}>
			    <Switch>
			     	<Route exact path="/" name="toDolist" component={Todos}/>
			     	

			    </Switch>
			    </Router>
		</Provider>
			    , document.getElementById('root'));
registerServiceWorker();
