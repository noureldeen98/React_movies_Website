

const CounterIncrement = (data)=>{
    // console.log(data);
    return{
        type:"Increase",
        payload:data+1
    }
}

export default CounterIncrement;