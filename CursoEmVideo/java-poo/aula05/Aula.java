public class Aula {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.abrirConta(0001, "CC", "Jubileu");

        ContaBanco p2 = new ContaBanco();
        p2.abrirConta(0002, "CP", "Creuza");

        p1.estadoAtual();
        p2.estadoAtual();
    }
}