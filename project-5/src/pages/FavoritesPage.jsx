import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import useFavorites from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <Container className="my-4">
      <h1 className="mb-4">Meus Filmes Favoritos</h1>
      {favorites.length === 0 ? (
        <Alert variant="info" className="text-center">
          Você ainda não tem filmes favoritos. Adicione alguns na página de busca ou de detalhes!
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={4} className="g-4">
          {favorites.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesPage;