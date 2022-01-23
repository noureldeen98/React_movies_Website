const RemoveFromFav =  (data)=>{
    console.log(" deleted from remove " + data )
    return{
        type:"UnFav",
        payload:data
    }
}

export default RemoveFromFav;