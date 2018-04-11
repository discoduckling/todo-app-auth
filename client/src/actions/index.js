import { FETCH_USER } from './types';
import { FETCH_TODOS } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = () => async dispatch => {
    const res = await axios.get('/auth/login');
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const getTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
    dispatch({ type: FETCH_TODOS, payload: res.data })
};

export const addTodo = (text) => async dispatch => {
    const res = await axios.post('/api/todos', text);
    dispatch({ type: FETCH_TODOS, payload: res.data })
};