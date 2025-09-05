import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

  const handleFavoriteClick = () => {
    if (isFavorite(movie)) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={posterUrl} alt={movie.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Ano: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
        </Card.Text>
        <div className="d-flex justify-content-between mt-auto">
          <Button
            variant="secondary"
            as={Link}
            to={`/movie/${movie.id}`}
            className="flex-grow-1 me-2"
          >
            Ver Detalhes
          </Button>
          <Button
            variant={isFavorite(movie) ? 'danger' : 'success'}
            onClick={handleFavoriteClick}
          >
            {isFavorite(movie) ? 'Remover' : 'Favoritar'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;