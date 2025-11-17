package exercicio6;

import java.util.Objects;

public final class ItemCarrinho {
    private final Carrinho produto;
    private final int quantidade;

    public ItemCarrinho(Carrinho produto, int quantidade) {
        if (quantidade <= 0) throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Carrinho getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public BigDecimal getTotal() {
        return produto.getPreco().multiply(BigDecimal.valueOf(quantidade));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ItemCarrinho)) return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return quantidade == that.quantidade && produto.equals(that.produto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade);
    }
}
