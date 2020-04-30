import { GET_USERS} from '../action/types'

let initState = {
    counter: 0,
    posts: [],
    loading: true,
    users: ['Mehdi', 'Rahma'],
    isAuth: false
}

const CounterReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default CounterReducer;