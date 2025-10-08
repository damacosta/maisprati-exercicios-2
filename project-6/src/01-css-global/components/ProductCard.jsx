export default function ProductCard({ produto, onAdd, disabled }) {
  return (
    <div className="product-card">
      <img src={produto.imagem} alt={produto.titulo} className="product-card__img" />
      <h3 className="product-card__title">{produto.titulo}</h3>
      <div className="product-card__price">R$ {produto.preco.toFixed(2)}</div>
      <button className="btn btn--solid" onClick={onAdd} disabled={disabled}>
        Adicionar
      </button>
    </div>
  );
}
