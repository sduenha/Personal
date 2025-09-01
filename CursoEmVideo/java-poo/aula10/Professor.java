public class Professor extends Pessoa {
    private String especialidade;
    private float salario;

    public Professor(String n, int i, String s, String e, float sa) {
        super(n, i, s);
        this.especialidade = e;
        this.salario = sa;
    }

    public String getEspecialidade() {
        return this.especialidade;
    }

    public void setEspecialidade(String e) {
        this.especialidade = e;
    }

    public float getSalario() {
        return this.salario;
    }

    public void setSalario(float s) {
        this.salario = s;
    }

    public void receberAumento(float a) {
        this.setSalario(this.getSalario() + a);
    }
}