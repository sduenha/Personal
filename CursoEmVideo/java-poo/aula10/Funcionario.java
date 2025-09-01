public class Funcionario extends Pessoa {
    private String setor;
    private boolean trabalhando;

    public Funcionario(String n, int i, String s, String set, boolean t) {
        super(n, i, s);
        this.setor = set;
        this.trabalhando = true;
    }

    public String getSetor() {
        return this.setor;
    }

    public void setSetor(String s) {
        this.setor = s;
    }

    public boolean isTrabalhando() {
        return this.trabalhando;
    }

    public void setTrabalhando(boolean t) {
        this.trabalhando = t;
    }
}