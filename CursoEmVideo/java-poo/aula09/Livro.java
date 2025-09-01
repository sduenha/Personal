public class Livro {
    private String titulo;
    private String autor;
    private int totPaginas;
    private int pagAtual;
    private boolean aberto;
    private Pessoa leitor;

    public Livro(
        String t,
        String a,
        int tot,
        int p,
        Pessoa l
    ) {
        
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String t) {
        this.titulo = t;
    }

    public String getAutor() {
        return this.autor;
    }

    public void setAutor(String a) {
        this.autor = a;
    }

    public int getTotPaginas() {
        return this.totPaginas;
    }

    public void setTotPaginas(int t) {
        this.totPaginas = t;
    }

    public int getPagAtual() {
        return this.pagAtual;
    }

    public void setPagAtual(int p) {
        this.pagAtual = p;
    }

    public boolean isAberto() {
        return this.aberto;
    }

    public void setAberto(boolean a) {
        this.aberto = a;
    }

    public Pessoa getleitor() {
        return this.leitor;
    }

    public void setLeitor(Pessoa l) {
        this.leitor = l;
    }

    public void detalhes() {

    }
}