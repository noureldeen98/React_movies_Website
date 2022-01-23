import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { CardGroup,Card,Button, Container } from "react-bootstrap";
import axios from "axios";



const MovieDeatails = ()=>{
  
    const params = useParams();

    const [film,setFilm]= useState({})


    const filmData = ()=>{
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=176c35cd9662bf4c24c600fc76b866b5`)
      .then((res)=>{
       setFilm(res.data)
    })
  }

    useEffect(()=>filmData(),[])
    
    return(
      
        <Card key={film.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} />
        <Card.Body>
          <Card.Title>{film.original_title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
}


export default MovieDeatails;

