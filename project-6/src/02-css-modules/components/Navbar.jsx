import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className={styles.navbar}>
      <span className={styles.logo}>Minha lojinha Vocaloid</span>
      <button className={styles.themeToggle} aria-label="Botão tema (sem função)">
        <img src="/icons/modo-escuro.png" alt="Ícone modo escuro" width={24} height={24} />
      </button>
      <span className={styles.cartBadge} aria-label="Itens no carrinho">
        <img src="/icons/carrinho.png" alt="Ícone carrinho" width={24} height={24} />
        <span className={styles.cartCount}>{cartCount}</span>
      </span>
    </header>
  );
}
