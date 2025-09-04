public abstract class Animal {
    protected float peso;
    protected int idade;
    protected int membros;

    public float getPeso() {
        return this.peso;
    }

    public void setPeso(float p) {
        this.peso = p;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int i) {
        this.idade = i;
    }

    public int getMebros() {
        return this.membros;
    }

    public void setMembros(int m) {
        this.membros = m;
    }

    public abstract void locomover();
    public abstract void alimentar();
    public abstract void emitirSom();
}