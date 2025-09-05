import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner, Alert, ListGroup, Button } from 'react-bootstrap';
import { getMovieDetails } from '../services/api';
import useFavorites from '../hooks/useFavorites';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError('Ocorreu um erro ao carregar os detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Carregando detalhes do filme...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!movie) {
    return <Alert variant="warning">Nenhum filme encontrado.</Alert>;
  }

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
    <Container className="my-5">
      <Row>
        <Col md={4} className="mb-4">
          <Image src={posterUrl} alt={movie.title} fluid rounded />
        </Col>
        <Col md={8}>
          <h2>{movie.title}</h2>
          <p className="text-muted">{movie.tagline}</p>
          <hr />
          <p>
            <strong>Sinopse:</strong> {movie.overview || 'Não disponível.'}
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Lançamento:</strong> {movie.release_date}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Duração:</strong> {movie.runtime ? `${movie.runtime} min` : 'N/A'}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ') || 'N/A'}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Avaliação (TMDB):</strong> {movie.vote_average.toFixed(1)}/10 ({movie.vote_count} votos)
            </ListGroup.Item>
          </ListGroup>
          <div className="mt-4">
            <Button
              variant={isFavorite(movie) ? 'danger' : 'success'}
              onClick={handleFavoriteClick}
            >
              {isFavorite(movie) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailsPage;