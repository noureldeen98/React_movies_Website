const intialStateOfCounter ={
    counter:1
}


const CounterReducer =(state = intialStateOfCounter , action)=>{
    switch(action.type){
        case  "Increase":
            return{
                ...state,
               counter:action.payload
            }

            case  "decrease":
                return{
                    ...state,
               counter:action.payload
                }

            default:
                return state   

    }
}

export default CounterReducer;