
const initial = {
    Icon: "text-gray",
  };
  
  export default function IconReducer(state = initial, action) {
    switch (action.type) {
      case "SET_LIGHT":
        return {
          ...state,
          Icon: action.payload,
        };
  
      default:
        return state;
    }
  }