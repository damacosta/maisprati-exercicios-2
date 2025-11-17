package exercicio4;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 40;

    @Override
    public void acelerar() {
        if (velocidade + 5 > VELOCIDADE_MAX) {
            throw new IllegalStateException("Velocidade máxima da bicicleta atingida!");
        }
        velocidade += 5;
    }

    @Override
    public void frear() {
        if (velocidade - 5 < 0) {
            velocidade = 0;
        } else {
            velocidade -= 5;
        }
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
