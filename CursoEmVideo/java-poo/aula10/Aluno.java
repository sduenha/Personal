public class Aluno extends Pessoa {
    private int matr;
    private String curso; 

    public Aluno(String n, int i, String s, String c) {
        super(n, i, s);
        this.curso = c;
    }

    public int getMatricula() {
        return this.matr;
    }    

    public void setMatricula(int m) {
        this.matr = m;
    } 

    public String getCurso() {
        return this.curso;
    }

    public void setCurso(String c) {
        this.curso = c;
    }

    public void cancelarMatricula() {
        System.out.println("Sua matricula foi cancelada");
    }
}