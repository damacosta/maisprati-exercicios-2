import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, Alert, Spinner, Pagination } from 'react-bootstrap';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const performSearch = async (page = 1) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const data = await searchMovies(query, page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(data.page);
    } catch (err) {
      setError('Ocorreu um erro ao buscar filmes. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setMovies([]);
    performSearch(1);
  };

  const handlePageChange = (page) => {
    performSearch(page);
  };

  const getPaginationItems = () => {
    let items = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow -1) {
      startPage = Math.max(1, endPage - maxPagesToShow +1);
    }

    if (startPage > 1) {
      items.push(<Pagination.First key="first" onClick={() => handlePageChange(1)} />);
      items.push(<Pagination.Prev key="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />);
      if (startPage > 2) items.push(<Pagination.Ellipsis key="first-ellipsis" />);
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
          {page}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) items.push(<Pagination.Ellipsis key="last-ellipsis" />);
      items.push(<Pagination.Next key="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />);
      items.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />);
    }

    return items;
  };

  return (
    <div>
      <h1 className="text-center mb-4">Busca de Filmes</h1>
      
      <Form onSubmit={handleSearchSubmit} className="d-flex mb-4">
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
        <>
          <Row xs={1} md={2} lg={4} className="g-4 mb-4">
            {movies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center">
            <Pagination>
              {getPaginationItems()}
            </Pagination>
          </div>
        </>
      )}
      
      {movies.length === 0 && !loading && !error && query && (
        <Alert variant="info" className="text-center">Nenhum filme encontrado para a sua busca.</Alert>
      )}
    </div>
  );
};

export default SearchPage;
