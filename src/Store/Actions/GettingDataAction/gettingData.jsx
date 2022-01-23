import axios from "axios";

export const gettingData = (counter)=>{
    return  (dispatch)=>{

      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=176c35cd9662bf4c24c600fc76b866b5&page=${counter}`)
        .then((res) =>{
         return res.data.results })
         .then((theData)=>{
        dispatch({type:"SET_Films",payload:theData})})
        .catch((err) => 
        dispatch({type:"SET_Films",payload:err.message}));
        

    }
}

