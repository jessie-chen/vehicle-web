const initial_state = {
  type:"",
  resStatus:false,
  resMsg:""
};
import {LOGIN} from "../actions/login";
export const handle_login = (state = initial_state,action)=>{
    switch (action.type) {
        case LOGIN:
            //return Object.assign({},state,{resStatus:action.resStatus,resMsg:action.resMsg})
            return state
    }
};
