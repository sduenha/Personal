public class ControleRemoto implements Controlador {
    private int volume;
    private boolean ligado;
    private boolean tocando;

    public ControleRemoto() {
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int v) {
        this.volume = v;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setLigado(boolean l) {
        this.ligado = l;
    }

    public boolean isTocando() {
        return tocando;
    }

    public void setTocando(boolean t) {
        this.tocando = t;
    }

    @Override
    public void ligar() {
        this.setLigado(true);
    }

    @Override
    public void desligar() {
        this.setLigado(false);
        this.setTocando(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("----- MENU -----");
        System.out.println("Está " + (this.isLigado() ? "ligado" : "desligado") + " e " + (this.isTocando() ? "tocando" : "pausado"));
        System.out.print("Volume: " + this.getVolume() + " ");
        System.out.print("[");
        for (int i = 0; i < 100; i += 10) {
            if (i < this.getVolume()) {
                System.out.print("|");
            } else {
                System.out.print(" ");
            }
        }
        System.out.println("]");

    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando o menu");
    }

    @Override
    public void maisVolume() {
        if (this.isLigado() && this.getVolume() < 100) {
            setVolume(this.getVolume() + 5);
        } else if (!this.isLigado()) {
            System.out.println("A TV precisa estar ligada para aumentar o volume!");
        } else if (this.getVolume() == 100) {
            System.out.println("Volume já está no máximo!");
        }
    }

    @Override
    public void menosVolume() {
        if (this.isLigado() && this.getVolume() >= 0) {
            setVolume(this.getVolume() - 5);
        } else if (!this.isLigado()) {
            System.out.println("A TV precisa estar desligada para deminuir o volume!");
        } else if (this.getVolume() == 0) {
            System.out.println("Volume já está no mínimo!");
        }
    }

    @Override
    public void ligarMudo() {
        if (this.isLigado() && this.getVolume() > 0) {
            this.setVolume(0);
        } else if (!this.isLigado()) {
            System.out.println("A  TV está desligada!");
        } else if (this.getVolume() == 0) {
            System.out.println("A TV já está no mudo!");
        }
    }

    @Override
    public void desligarMudo() {
        if (this.isLigado() && this.getVolume() == 0) {
            this.setVolume(50);
        } else if (!this.isLigado()) {
            System.out.println("A TV está desligada!");
        } else if (this.getVolume() != 0) {
            System.out.println("A TV não está no mudo!");
        }
    }

    @Override
    public void play() {
        if (this.isLigado() && !this.isTocando()) {
            this.setTocando(true);
        } else if (!this.isLigado()) {
            System.out.println("A TV está desligada!");
        } else if (this.isTocando()) {
            System.out.println("A TV já está tocando!");
        }
    }

    @Override
    public void pause() {
        if (this.isLigado() && this.isTocando()) {
            this.setTocando(false);
        } else if (!this.isLigado()) {
            System.out.println("A TV está desligada!");
        } else if (!this.isTocando()) {
            System.out.println("A TV já está pausada!");
        }
    }
}