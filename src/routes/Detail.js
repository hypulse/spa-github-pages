import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title}></img>
      <h1>{movie.title_long}</h1>
      <p>{movie.description_full}</p>
    </div>
  );
}

export default Detail;
