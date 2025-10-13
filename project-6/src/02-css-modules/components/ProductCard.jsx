import React from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';

export default function ProductCard({ produto, onAdd, disabled }) {
  return (
    <div className={styles.card} tabIndex={0} aria-label={`${produto.titulo}, preço R$ ${produto.preco.toFixed(2)}`}>
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
    </div>
  );
}
