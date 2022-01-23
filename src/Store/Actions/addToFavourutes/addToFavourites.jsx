

const AddToFavourite = (data)=>{
    console.log( data)
    return {
        type:"Fav",
        payload:data
    }
}

export default AddToFavourite;