
const initialStat = {
    arrayOfFavourites:[]
 }
 
 const TheReducer = ( state =initialStat,action)=>{
     switch(action.type){
         case "Fav":
             return{
                 ...state,
                 arrayOfFavourites:[...state.arrayOfFavourites,action.payload]
             }
            
 
         case "UnFav":
             return{
                 ...state,
                 arrayOfFavourites: state.arrayOfFavourites.filter((movie) => movie.id !== action.payload.id)
             }
             
 
             default:
                 return{
                 ...state
                 }
 
     }
 }
 
 
 export default TheReducer;