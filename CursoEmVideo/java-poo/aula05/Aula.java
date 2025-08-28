public class Aula {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.abrirConta(0001, "CC", "Jubileu");
        p1.depositar(100);
        System.out.println("Saldo: " + p1.getSaldo());
        p1.sacar(150);
        System.out.println("Saldo: " + p1.getSaldo());

        ContaBanco p2 = new ContaBanco();
        p2.abrirConta(0002, "CP", "Creuza");
        p2.depositar(500);

    }
}