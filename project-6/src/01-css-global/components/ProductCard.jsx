import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ produto, loading, onAdd, disabled }) {
    return (
        <div className="product-card">
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
                        className="product-card__img"
                        loading="lazy" />
                    <span
                        className={
                            "product-card__tag " +
                            (produto.tag === "Novo"
                                ? "product-card__tag--novo"
                                : "product-card__tag--promo")
                        }
                    >
                        {produto.tag}
                    </span>
                    <h3 className="product-card__title">{produto.titulo}</h3>
                    <div className="product-card__price">R$ {produto.preco.toFixed(2)}</div>
                    <div className="product-card__rating">★ {produto.rating}</div>
                    <Button onClick={onAdd} disabled={disabled}>Adicionar</Button>
                </>
            )}
        </div>
    );
}
