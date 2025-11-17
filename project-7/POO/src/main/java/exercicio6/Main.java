package exercicio6;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Camisa", 100, 2);
        Produto p2 = new Produto("Caneca", 50, 3);

        ItemCarrinho i1 = new ItemCarrinho(p1, 2);
        ItemCarrinho i2 = new ItemCarrinho(p2, 1);

        Carrinho carrinho = new Carrinho();
        carrinho = carrinho.adicionarItem(i1);
        carrinho = carrinho.adicionarItem(i2);

        System.out.println("Total original: " + carrinho.total());

        Carrinho carrinhoComCupom = carrinho.aplicarCupom(20);
        System.out.println("Total com cupom 20%: " + carrinhoComCupom.total());
    }
}

