package exercicio5;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigoBoleto;

    public Boleto(String codigoBoleto) {
        this.codigoBoleto = codigoBoleto;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if (codigoBoleto == null || !codigoBoleto.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de boleto inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        System.out.println("Pagamento de R$" + valor + " processado via boleto.");
    }
}
