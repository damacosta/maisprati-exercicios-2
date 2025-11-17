package exercicio1;

public class Main {
    public static void main(String[] args) {
        try {
            Produto p1 = new Produto("Camiseta", 50.0, 10);
            Produto p2 = new Produto("Caneca", 20.0, 5);

            System.out.println(p1);
            System.out.println(p2);

            p1.setPreco(45.0);
            p2.setQuantidadeEmEstoque(8);

            System.out.println("Após alteração:");
            System.out.println(p1);
            System.out.println(p2);

            p1.setPreco(-10); // Lança IllegalArgumentException
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        try {
            Produto pInvalido = new Produto("", 10, 1); // Lança IllegalArgumentException
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}

