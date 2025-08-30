
public class Luta {
    private Lutador desafiado;
    private Lutador desafiante;
    private int rounds;
    private boolean aprovada;

    public void marcarLuta(Lutador l1, Lutador l2) {
        if (l1.getCategoria().equals(l1.getCategoria()) && l1 != l2) {
            this.aprovada = true;
            this.desafiado = l1;
            this.desafiante = l2;
        } else {
            this.aprovada = false;
            this.desafiado = null;
            this.desafiante = null;
        }
    }

    public void lutar() {
        if (!this.isAprovada()) {
            System.out.println("A luta nao pode acontecer!");
        }

        desafiado.apresentar();
        desafiante.apresentar();
        int result = (int) (Math.random() * 3);

        switch (result) {
            case 0 -> {
                desafiado.empatarLuta();
                desafiante.empatarLuta();
            }
            case 1 -> {
                desafiado.ganharLuta();
                desafiante.perderLuta();
            }
            case 2 -> {
                desafiado.perderLuta();
                desafiante.ganharLuta();
            }
            default -> {
            }
        }

    }

    public Lutador getDesafiado() {
        return this.desafiado;
    }

    public void setDesafiado(Lutador d) {
        this.desafiado = d;
    }

    public Lutador getDesafiante() {
        return this.desafiante;
    }

    public void getDesafiantet(Lutador d) {
        this.desafiante = d;
    }

    public int getRounds() {
        return this.rounds;
    }

    public void setRounds(int r) {
        this.rounds = r;
    }

    public boolean isAprovada() {
        return this.aprovada;
    }

    public void setAprovada(boolean a) {
        this.aprovada = a;
    }
}