import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={posterUrl} alt={movie.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Ano: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
        </Card.Text>
        <Button 
          variant="secondary" 
          className="mt-auto"
          as={Link}
          to={`/movie/${movie.id}`}
        >
          Ver Detalhes
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;