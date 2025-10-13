import React from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';

export default function ProductCard({ produto, loading, onAdd, disabled }) {
  return (
    <div className={styles.card} tabIndex={0} aria-label={`${produto.titulo}, preço R$ ${produto.preco.toFixed(2)}`}>
      {loading ? (
        <>
          <Skeleton width="100%" height="120px" />
          <Skeleton width="60%" height="2em" />
          <Skeleton width="40%" height="1.5em" />
          <Skeleton width="80px" height="2em" />
        </>
      ) : (
        <>
          <img
            src={produto.imagem}
            alt={produto.titulo}
            className={styles.img}
            loading="lazy"
          />
          <span
            className={`${styles.tag} ${
              produto.tag === 'Novo' ? styles.tagNovo : styles.tagPromo
            }`}
          >
            {produto.tag}
          </span>
          <h3 className={styles.title}>{produto.titulo}</h3>
          <div className={styles.price}>R$ {produto.preco.toFixed(2)}</div>
          <div className={styles.rating}>★ {produto.rating}</div>
          <Button onClick={onAdd} disabled={disabled} variant="outline">
            Adicionar
          </Button>
        </>
      )}
    </div>
  );
}
