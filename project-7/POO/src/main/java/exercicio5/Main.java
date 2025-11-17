package exercicio5;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<FormaPagamento> pagamentos = new ArrayList<>();
        pagamentos.add(new CartaoCredito("1234567812345678"));
        pagamentos.add(new Boleto("00190500954014481606906809350314337370000000100"));
        pagamentos.add(new Pix("danielle@exemplo.com"));

        for (FormaPagamento p : pagamentos) {
            try {
                p.processarPagamento(new BigDecimal("150.00"));
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }

        try {
            FormaPagamento cartaoInvalido = new CartaoCredito("123");
            cartaoInvalido.processarPagamento(new BigDecimal("50"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
