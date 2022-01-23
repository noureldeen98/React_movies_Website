// const initilaFilmsState={
//   listingFilms:[{}]
// }


// export default function FilmReducer(state = initilaFilmsState.listingFilms, action) {
//     switch (action.type) {
//       case "SET_Films":
//         return {
//           ...state,
//           listingFilms:[action.payload]
//         }
        
  
//       default:
//         return state;
//     }
//   }


  export default function FilmReducer(state = [], action) {
    switch (action.type) {
      case "SET_Films":
        return action.payload
        
  
      default:
        return state;
    }
  }
  