public class Peixe extends Animal {
    private String corEscama;

    @Override
    public void locomover() {
        System.out.println("Nadando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo algas");
    }
    
    @Override
    public void emitirSom() {
        System.out.println("Peixe nao faz som!");
    }

    public void soltarBolha() {
        System.out.println("Soltou uma bolha");
    }

    public String getCorEscama() {
        return this.corEscama;
    }

    public void setCorEscama(String c) {
        this.corEscama = c;
    }
}