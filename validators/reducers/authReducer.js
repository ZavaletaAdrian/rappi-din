import {LOGIN} from '../actions/authActions'
const initialState = {
    number: null,
    login: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                number: action.number,
                login: true,
            }

    }
    return state;
}