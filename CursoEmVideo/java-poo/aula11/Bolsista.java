public class Bolsista extends Aluno {
    private float bolsa;

    public void renovarBolsa() {
        System.out.println("Renovando bolsa de " + this.nome);
    }

    @Override
    public void pagarMensalidade() {
        System.out.println(this.nome + " é bolsista! Pagando facilitado!");
    }

    public float getBolsa() {
        return this.bolsa;
    }

    public void setBolsa(float b) {
        this.bolsa = b;
    }
}