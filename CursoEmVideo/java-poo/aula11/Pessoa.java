public abstract class Pessoa {
    protected String nome;
    protected int idade;
    protected String sexo;

    public final void fazerAniv() {
        this.setIdade(this.getIdade() + 1);
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String n) {
        this.nome = n;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int i) {
        this.idade = i;
    }

    public String getSexo() {
        return this.sexo;
    }

    public void setSexo(String s) {
        this.sexo = s;
    }
}