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

export const addTodo = (values) => async dispatch => {
    const res = await axios.post('/api/todos', values);
    dispatch({ type: FETCH_TODOS, payload: res.data })
};

export const deleteTodo = (todo_id) => async dispatch => {
    // console.log(todo_id);
    const res = await axios.delete(`/api/todos/${todo_id}`);
    dispatch({ type: FETCH_TODOS, payload: res.data })
}