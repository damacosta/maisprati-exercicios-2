package exercicio8;

import java.math.BigDecimal;

public interface CalculadoraFrete {
    BigDecimal calcular(Pedido pedido) throws CepInvalidoException;
}
