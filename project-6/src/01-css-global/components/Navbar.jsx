export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="navbar">
      <span className="navbar__logo">Minha lojinha Vocaloid</span>
      <button className="navbar__theme-toggle" aria-label="Alternar tema">
        <img src="/icons/modo-escuro.png" alt="Alternar para modo escuro" width={24} height={24} />
      </button>
      <span className="navbar__cart-badge" aria-label="Itens no carrinho">
        <img src="/icons/carrinho.png" alt="Carrinho" width={24} height={24} />
        <span className="cart-count">{cartCount}</span>
      </span>
    </header>
  );
}
