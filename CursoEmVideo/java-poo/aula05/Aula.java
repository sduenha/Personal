public class Aula {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.abrirConta(0001, "CC", "Jubileu");
        p1.estadoAtual();
    }
}