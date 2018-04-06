import { FETCH_USER } from '../actions/types';

export default (state=null, action) => {
    switch(action.type) {
        case FETCH_USER:
            // if user exists, return user data
            // if user isn't there, return false
            console.log(action.payload);
            return action.payload || false;
        default:
            return state;
    }
}