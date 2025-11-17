package exercicio8;

public class Pedido {
    private String cepDestino;
    private BigDecimal valorPedido;
    private CalculadoraFrete freteStrategy;

    public Pedido(String cepDestino, BigDecimal valorPedido, CalculadoraFrete freteStrategy) {
        this.cepDestino = cepDestino;
        this.valorPedido = valorPedido;
        this.freteStrategy = freteStrategy;
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public BigDecimal getValorPedido() {
        return valorPedido;
    }

    public void setFreteStrategy(CalculadoraFrete freteStrategy) {
        this.freteStrategy = freteStrategy;
    }

    public BigDecimal calcularFrete() throws CepInvalidoException {
        return freteStrategy.calcular(this);
    }
}
