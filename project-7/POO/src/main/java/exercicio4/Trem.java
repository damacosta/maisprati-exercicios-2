package exercicio4;

public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 300;

    @Override
    public void acelerar() {
        if (velocidade + 20 > VELOCIDADE_MAX) {
            throw new IllegalStateException("Velocidade máxima do trem atingida!");
        }
        velocidade += 20;
    }

    @Override
    public void frear() {
        if (velocidade - 20 < 0) {
            velocidade = 0;
        } else {
            velocidade -= 20;
        }
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}

