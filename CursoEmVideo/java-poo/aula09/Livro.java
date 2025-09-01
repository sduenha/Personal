public class Livro implements Publicacao {
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
        Pessoa l
    ) {
        this.titulo = t;
        this.autor = a;
        this.totPaginas = tot;
        this.pagAtual = 0;
        this.aberto = false;
        this.leitor = l;
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

    public Pessoa getLeitor() {
        return this.leitor;
    }

    public void setLeitor(Pessoa l) {
        this.leitor = l;
    }

    public void detalhes() {
        System.out.println("======== DETALHES ========");
        System.out.println("O livro " + this.getTitulo() + " foi escrito por " + this.getAutor());
        System.out.println("Ele tem um total de " + this.getTotPaginas() + " paginas");
        System.out.println("Voce " + this.getLeitor().getNome() + " esta com o livro " + (this.isAberto() ? "aberto " : "fechado ") + "e esta na pagina " + this.getPagAtual() + "\n");
    }

    @Override
    public void abrir() {
        this.aberto = true;
    }

    @Override
    public void fechar() {
        this.aberto = false;
    }

    @Override
    public void folhear(int p) {
        if (p > this.getTotPaginas()) {
            System.out.println("O livro nao tem tanta paginas");
        } else if (p <= 0) {
            System.out.println("Forneca valores positivos");
        }

        this.setPagAtual(p);
        
    }

    @Override
    public void avancarPag() {
        if (this.getPagAtual() == this.totPaginas) {
            this.setPagAtual(this.getPagAtual() + 1);
        } else {
            System.out.println("Voce chegou ao final do livro!");
        }
    }

    @Override
    public void voltarPag() {
        if (this.pagAtual != 0) {
            this.setPagAtual(this.getPagAtual() - 1);
        } else {
            System.out.println("Voce ja esta no comeco do livro");
        }
    }
}