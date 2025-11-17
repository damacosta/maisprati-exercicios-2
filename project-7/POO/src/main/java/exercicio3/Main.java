package exercicio3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Gerente("Alice", new BigDecimal("8000")));
        funcionarios.add(new Desenvolvedor("Bob", new BigDecimal("4000")));
        funcionarios.add(new Desenvolvedor("Carlos", new BigDecimal("5000")));

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " - Salário: " + f.getSalario() +
                    " - Bônus: " + f.calcularBonus());
        }
    }
}
