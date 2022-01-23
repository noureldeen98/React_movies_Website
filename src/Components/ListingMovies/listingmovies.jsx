import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import addToFavourites from "../../Store/Actions/addToFavourutes/addToFavourites";
import { gettingData } from "../../Store/Actions/GettingDataAction/gettingData";

import { useSelector } from "react-redux";
import LightTheStar from "../../Store/Actions/LightTheStar/lightTheStar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import CounterIncrement from "../../Store/Actions/IncreaseCounter/counterIncremnet";
import CounterDecrement from "../../Store/Actions/decreaseCounter/counterDecrement";
import CounterReducer from "../../Store/Reducer/conuterReducer";

const ListingMovies = () => {
  const dispatch = useDispatch();

  // const films = useSelector((state) => state.FilmReducer.listingFilms);
  const loader = useSelector((state) => state.loaderReducer);
  console.log(loader);
  const films = useSelector((state) => state.FilmReducer);
  console.log(films);

  const star = useSelector((state) => state.starReducer.Icon);
  console.log(" the star " + star);

  const counterState = useSelector((state) => state.counterReducer);
  console.log(counterState.counter);

  const handleAddToFav = (card) => {
    console.log(card);
    dispatch(addToFavourites(card));
    dispatch(LightTheStar("text-warning"));
  };

  // const [films, setFilms] = useState([]);

  // const gettingData = () => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=176c35cd9662bf4c24c600fc76b866b5"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       const respo = res.data.results;
  //       console.log(respo);
  //       setFilms(respo);
  //     });
  // };

  // const [ counter, setCounter] = useState(1)
  // console.log(counter)

  // const handleNextPage=()=>{
  //     setCounter(counter+1)
  // }

  const handleNextPage = () => {
    dispatch(CounterIncrement(counterState.counter));
  };

  useEffect(() => {
    dispatch(gettingData(counterState.counter));
  }, [counterState.counter]);

  const handlepreviousPage = () => {
    dispatch(CounterDecrement(counterState.counter));
  };

  return (
    <div className="row">
      {loader && (
        <div className="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {films.map((card) => {
        return (
          <Card key={card.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
            />
            <Card.Body>
              <Card.Title>{card.original_title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`/detailsOfMovie/${card.id}`}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
              <Button variant="primary" onClick={() => handleAddToFav(card)}>
                Add to Favourite{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  color={`${star.Icon}`}
                ></FontAwesomeIcon>
              </Button>
            </Card.Body>
          </Card>
        );
      })}

      <Button type="button" onClick={() => handleNextPage()}>
        Next
      </Button>
      <Button onClick={() => handlepreviousPage()}>
        {`${counterState.counter}` >= 1 ? "Previous" : "This is the last page"}
      </Button>
    </div>
  );
};

export default ListingMovies;
