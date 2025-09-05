public abstract class Pessoa {
    private String nome;
    private int idade;
    private String sexo;
    private float experiencia;

    public Pessoa(
        String nome,
        int idade,
        String sexo
    ) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.experiencia = 0f;
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

    public float getExperiencia() {
        return this.experiencia;
    }

    public void setExperiencia(float e) {
        this.experiencia = e;
    }

    private void ganharExp() {
    
    };
}