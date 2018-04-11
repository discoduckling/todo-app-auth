import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers ({
    auth: authReducer,
    todos: todosReducer,
    form: reduxForm
});