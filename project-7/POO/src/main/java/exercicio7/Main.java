package exercicio7;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        IRepository<Produto, Integer> repo = new InMemoryRepository<>();

        Produto p1 = new Produto(1, "Camisa", BigDecimal.valueOf(100));
        Produto p2 = new Produto(2, "Caneca", BigDecimal.valueOf(50));

        repo.salvar(p1);
        repo.salvar(p2);

        System.out.println("Todos os produtos:");
        repo.listarTodos().forEach(System.out::println);

        try {
            System.out.println("Buscando ID 1: " + repo.buscarPorId(1).orElse(null));
            repo.remover(1);
            System.out.println("Após remover ID 1:");
            repo.listarTodos().forEach(System.out::println);
            repo.remover(3); // Deve lançar exceção
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
