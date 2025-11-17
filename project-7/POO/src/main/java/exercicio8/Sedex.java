package exercicio8;

import java.math.BigDecimal;

public class Sedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) throws CepInvalidoException {
        if (!pedido.getCepDestino().matches("\\d{5}-?\\d{3}")) {
            throw new CepInvalidoException("CEP inválido");
        }
        return BigDecimal.valueOf(30);
    }
}

