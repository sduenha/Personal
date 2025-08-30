public class Lutador {
    private String nome;
    private String nacionalidade;
    private int idade;
    private float altura;
    private float peso;
    private String categoria;
    private int vitorias;
    private int derrotas;
    private int empates;

    public Lutador(
        String no,
        String na,
        int id,
        float al,
        float pe,
        int vi,
        int de,
        int em
    ) {
        this.nome = no;
        this.nacionalidade = na;
        this.idade = id;
        this.altura = al;
        this.setPeso(pe);
        this.vitorias = vi;
        this.derrotas = de;
        this.empates = em;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String n) {
        this.nome = n;
    }

    public String getNacionalidade() {
        return this.nacionalidade;
    }

    public void setNacionalidade(String n) {
        this.nacionalidade = n;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int i) {
        this.idade = i;
    }

    public float getAltura() {
        return this.altura;
    }

    public void setAltura(float a) {
        this.altura = a;
    }

    public float getPeso() {
        return this.peso;
    }

    public void setPeso(float p) {
        this.peso = p;
        this.setCategoria();
    }


    public String getCategoria() {
        return this.categoria;
    }

    public void setCategoria() {
        if (this.getPeso() < 52.2) {
            this.categoria = "Inválido";
        } else if (this.getPeso() <= 70.3) {
            this.categoria = "Leve";
        } else if (this.getPeso() <= 83.9) {
            this.categoria = "Médio";
        } else if (this.getPeso() <= 120.2) {
            this.categoria = "Pesado";
        } else {
            this.categoria = "Inválido";
        }
    }

    public int getVitorias() {
        return this.vitorias;
    }

    public void setVitorias(int v) {
        this.vitorias = v;
    }

    public int getDerrotas() {
        return  this.derrotas;
    }

    public void setDerrotas(int d) {
        this.derrotas = d;
    }

    public int getEmpates() {
        return this.empates;
    }

    public void setEmpates(int e) {
        this.empates = e;
    }

    public void ganharLuta() {
        this.setVitorias(getVitorias() + 1);
    }

    public void perderLuta() {
        this.setDerrotas(getDerrotas() + 1);
    }

    public void empatarLuta() {
        this.setEmpates(getEmpates() + 1);
    }

    public void apresentar() {
        System.out.println("Lutador: " + this.getNome());
        System.out.println("Origem: " + this.getNacionalidade());
        System.out.println(this.getIdade() + "anos");
        System.out.println(this.getAltura() + "m de altura");
        System.out.println("Pesando " + this.getPeso() + "quilos");
        System.out.println("Ganhou: " + this.getVitorias());
        System.out.println("Perdeu: " + this.getDerrotas());
        System.out.println("Empatou: " + this.getEmpates());
    }

    public void status() {
        System.out.print(this.getNome());
        System.out.print(" é peso " + this.getCategoria());
        System.out.println(this.getVitorias() + "vitórias");
        System.out.println(getDerrotas() + " derrotas");
        System.out.println(getEmpates() + " empates");
    }
}