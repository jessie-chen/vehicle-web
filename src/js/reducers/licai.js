import {handleAction, handleActions} from 'redux-actions';


const initialState = {
    licai: {
        productList: {
            pageNum: -1,
            list:[]
        }
    }
};

export default handleActions({
    FETCH_PRODUCTS: (state, action) => {
        const data = action.payload.data;
        if(data) {
            return {
                ...state,
                licai: {
                    ...state.licai,
                    productList: {
                        ...data,
                        list: [
                            ...state.licai.productList.list,
                            ...data.pageData
                        ]
                    }
                }
            }
        } else {
            return state;
        }
    },
}, initialState)

