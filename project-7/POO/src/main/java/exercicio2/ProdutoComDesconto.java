package exercicio2;

public class ProdutoComDesconto extends Produto {

    public ProdutoComDesconto(String nome, double preco, int quantidadeEmEstoque) {
        super(nome, preco, quantidadeEmEstoque);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto deve estar entre 0 e 50%");
        }
        double novoPreco = getPreco() * (1 - porcentagem / 100);
        setPreco(novoPreco);
    }
}

