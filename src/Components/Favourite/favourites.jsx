import { useState } from "react";
import { useSelector } from "react-redux"
import { CardGroup,Card,Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import RemoveFromFav from "../../Store/Actions/removeFromFavourites/removeFromFavourites"



const Favourites =()=>{
  
    const dispatch = useDispatch();

    const selector = useSelector((state)=>state.Reducer.arrayOfFavourites);
    console.log (selector)


    const handleRemoveButton = (movie) =>{
      dispatch(RemoveFromFav(movie))
    }

    return(
    <>
        {selector.map((movie)=>{
         
            return(
        <Card key={movie.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="danger" onClick={()=>handleRemoveButton(movie)}>Remove</Button>
        </Card.Body>
      </Card>

      )
    })}
</>
    )

    


}
export default Favourites;