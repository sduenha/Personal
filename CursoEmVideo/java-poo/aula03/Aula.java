public class Aula {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();

        c1.modelo = "BIC Cristal";
        c1.cor = "Azul";
        // c1.ponta = 0.5f; -> Ponta is private, can't change its value
        c1.carga = 80;
        c1.tampada = true;
        c1.status();
    }
} 