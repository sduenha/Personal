public class Visualizacao {
    private Gafanhoto espectador;
    private Video filme;

    public Visualizacao(Gafanhoto espectador, Video filme) {
        this.espectador = espectador;
        this.filme = filme;
        espectador.setTotAssistido(espectador.getTotAssistido() + 1);
        filme.setViews(filme.getViews() + 1);
    }

    public Gafanhoto getEspectador() {
        return this.espectador;
    }

    public void setEspectador(Gafanhoto e) {
        this.espectador = e;
    }

    public Video getFilme() {
        return this.filme;
    }

    public void setFilme(Video f) {
        this.filme = f;
    }

    public void avaliar() {
        this.filme.setAvaliacao(5);
    }

    public void avaliar(int nota) {
        this.filme.setAvaliacao(nota);
    }

    public void avaliar(float porc) {
        if(porc <= 20) {
            this.filme.setAvaliacao(3);
        } else if (porc <= 50) {
            this.filme.setAvaliacao(5);
        } else if (porc <= 90) {
            this.filme.setAvaliacao(8);
        } else {
            this.filme.setAvaliacao(10);
        }
    }
}