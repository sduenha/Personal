public class Reptil extends Mamifero {
    private String corEscama;

    @Override
    public void locomover() {
        System.out.println("Rastejando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo Vegetais");
    }

    @Override
    public void emitirSom() {
        System.out.println("Som de Reptil");
    }

    public String getCorEscama() {
        return this.corEscama;
    }

    public void setCorEscama(String c) {
        this.corEscama = c;
    }
}