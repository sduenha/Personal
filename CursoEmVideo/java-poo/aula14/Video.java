public class Video implements AcoesVideo {
    private String titulo;
    private int avaliacao;
    private int views;
    private int curtidas;
    private boolean reproduzindo;

    public Video(String t) {
        this.titulo = t;
        this.avaliacao = 1;
        this.views = 0;
        this.curtidas = 0;
        this.reproduzindo = false;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String t) {
        this.titulo = t;
    }

    public int getAvaliacao() {
        return this.avaliacao;
    }

    public void setAvaliacao(int a) {
        this.avaliacao = a;
    }

    public int getViews() {
        return this.views;
    }

    public void setViews(int v) {
        this.views = v;
    }

    public int getCurtidas() {
        return this.curtidas;
    }

    public void setCurtidas(int c) {
        this.curtidas = c;
    }

    public boolean isReproduzindo() {
        return this.reproduzindo;
    }

    public void setReproduzindo(boolean r) {
        this.reproduzindo = r;
    }

    @Override
    public void play() {
        this.reproduzindo = true;
    }

    @Override
    public void pause() {
        this.reproduzindo = false;
    }

    @Override
    public void like() {
        this.setCurtidas(this.getCurtidas() + 1);
    }
}