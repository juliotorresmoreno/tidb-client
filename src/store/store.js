import { createStore, applyMiddleware } from 'redux';
//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;