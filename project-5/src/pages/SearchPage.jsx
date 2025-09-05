// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (err) {
      setError('Ocorreu um erro ao buscar filmes. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Busca de Filmes</h1>

      <Form onSubmit={handleSearch} className="d-flex mb-4">
        <FormControl
          type="search"
          placeholder="Digite o nome de um filme..."
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="primary" type="submit">Buscar</Button>
      </Form>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Carregando...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {movies.length > 0 && (
        <Row xs={1} md={2} lg={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}

      {movies.length === 0 && !loading && !error && query && (
        <Alert variant="info" className="text-center">Nenhum filme encontrado para a sua busca.</Alert>
      )}
    </div>
  );
};

export default SearchPage;