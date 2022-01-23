const CounterDecrement =(data)=>{
    return{
        type:"decrease",
        payload:data-1
    }
}

export default  CounterDecrement;