public class Aluno extends Pessoa {
    private int matricula;
    private String curso;

    public void pagarMensalidade() {
        System.out.println("Pagando mensalidade!");
    }

    public int getMatricula() {
        return this.matricula;
    }

    public void setMatricula(int m) {
        this.matricula = m;
    } 

    public String getCurso() {
        return this.curso;
    }

    public void setCurso(String c) {
        this.curso = c;
    }
}