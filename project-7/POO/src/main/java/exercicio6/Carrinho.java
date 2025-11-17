package exercicio6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public final class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho() {
        this.itens = Collections.emptyList();
    }

    private Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(itens);
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(ItemCarrinho item) {
        List<ItemCarrinho> novosItens = new ArrayList<>(itens);
        novosItens.add(item);
        return new Carrinho(novosItens);
    }

    public Carrinho aplicarCupom(double percentual) {
        if (percentual < 0 || percentual > 30) throw new IllegalArgumentException("Cupom máximo 30%");
        List<ItemCarrinho> novosItens = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            BigDecimal desconto = item.getProduto().getPreco()
                    .multiply(BigDecimal.valueOf(percentual / 100))
                    .setScale(2, RoundingMode.HALF_EVEN);
            Produto novoProduto = new Produto(item.getProduto().getNome(),
                    item.getProduto().getPreco().subtract(desconto),
                    item.getProduto().getQuantidadeEmEstoque());
            novosItens.add(new ItemCarrinho(novoProduto, item.getQuantidade()));
        }
        return new Carrinho(novosItens);
    }

    public BigDecimal total() {
        return itens.stream()
                .map(ItemCarrinho::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}

