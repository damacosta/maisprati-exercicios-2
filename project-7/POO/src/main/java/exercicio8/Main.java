package exercicio8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        try {
            Pedido pedido1 = new Pedido("12345-678", BigDecimal.valueOf(200), new Sedex());
            System.out.println("Frete Sedex: " + pedido1.calcularFrete());

            pedido1.setFreteStrategy(new Pac());
            System.out.println("Frete PAC: " + pedido1.calcularFrete());

            pedido1.setFreteStrategy(new RetiradaNaLoja());
            System.out.println("Frete Retirada na Loja: " + pedido1.calcularFrete());

            pedido1.setFreteStrategy(p -> {
                if (!p.getCepDestino().matches("\\d{5}-?\\d{3}")) {
                    throw new CepInvalidoException("CEP inválido");
                }
                if (p.getValorPedido().compareTo(BigDecimal.valueOf(150)) > 0) {
                    return BigDecimal.ZERO;
                }
                return BigDecimal.valueOf(10);
            });
            System.out.println("Frete promocional: " + pedido1.calcularFrete());

            Pedido pedidoInvalido = new Pedido("abc", BigDecimal.valueOf(100), new Sedex());
            pedidoInvalido.calcularFrete();
        } catch (CepInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}

