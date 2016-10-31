import { createAction } from 'redux-actions';
import { createTypes, http} from '../utils';

export const PREFIX = "auth";
export const TYPES = createTypes(PREFIX,[
    'LOGIN'
]);
export const login = createAction(
    TYPES.LOGIN,
    (username,password)=>http.get("/a/loginPOST"+username+"/"+password)
);
