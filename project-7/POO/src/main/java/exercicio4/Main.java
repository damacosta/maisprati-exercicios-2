package exercicio4;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeioTransporte> transportes = new ArrayList<>();
        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte t : transportes) {
            try {
                t.acelerar();
                t.acelerar();
                System.out.println(t.getClass().getSimpleName() + " acelerou para " + t.getVelocidade() + " km/h");
                t.frear();
                System.out.println(t.getClass().getSimpleName() + " freou para " + t.getVelocidade() + " km/h");
            } catch (IllegalStateException e) {
                System.out.println(t.getClass().getSimpleName() + " erro: " + e.getMessage());
            }
        }
    }
}
