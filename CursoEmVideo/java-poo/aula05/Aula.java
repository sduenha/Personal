public class Aula {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.abrirConta(0001, "CC", "Jubileu");
        p1.depositar(100);
        p1.sacar(150);
        p1.fecharConta();

        ContaBanco p2 = new ContaBanco();
        p2.abrirConta(0002, "CP", "Creuza");
        p2.depositar(500);

        p1.estadoAtual();
        p2.estadoAtual();
    }
}