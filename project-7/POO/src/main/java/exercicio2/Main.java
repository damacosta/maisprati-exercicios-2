package exercicio2;

public class Main {
    public static void main(String[] args) {
        ProdutoComDesconto produto = new ProdutoComDesconto("Tênis", 200.0, 5);
        System.out.println("Preço original: " + produto.getPreco());
        produto.aplicarDesconto(20);
        System.out.println("Preço após desconto: " + produto.getPreco());

        try {
            produto.aplicarDesconto(60);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
