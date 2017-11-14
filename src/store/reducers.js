import { combineReducers } from 'redux';
import messages from './messages';
import application from './application';
import querys from './querys';

export default combineReducers({
    messages, application, querys
});