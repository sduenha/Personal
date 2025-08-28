public class ContaBanco {
    public int numConta;
    protected  String tipo;
    private String dono;
    private float saldo;
    private Boolean status;

    public void ContaBanco() {
        this.saldo = 0.0f;
        this.status = false;
    }

    public void abrirConta(int n, String t, String d) {

        if (!t.equals("CC") && !t.equals("CP")) {
            System.out.println("Tipo de conta invalida!");
            return;
        }

        this.setnumConta(n);
        this.setTipo(t);
        this.setDono(d);
        this.setStatus(true);

        if (t.equals("CC")) {
            this.setSaldo(50.0f);
        } else if (t.equals("CP")) {
            this.setSaldo(150.0f);
        }
    }

    public void fecharConta() {
        if (this.getSaldo() != 0) {
            System.out.println("Zere o saldo antes de fechar a conta!");
            return;
        }
        this.setStatus(false);
    }

    public void depositar(float v) {
        if (!this.getStatus()) {
            System.out.println("A conta precisa estar aberta para depositar dinheiro!");
            return;
        }

        this.setSaldo(this.getSaldo() + v);
    }

    public void sacar(float v) {
        if (!this.getStatus()) {
            System.out.println("A conta precisa estar aberta para sacar dinheiro!");
            return;
        }

        if (this.getSaldo() > v) {
            this.setSaldo(this.getSaldo() - v);
            System.out.println("Saldo restante: " + this.getSaldo());
        } else {
            System.out.println("Saldo insuficiente!");
        }
    }

    public void pagarMensal() {
        if (this.getTipo().equals("CC")) {
            this.setSaldo(this.getSaldo() - 12.0f);
        } else if (this.getTipo().equals("CP")) {
            this.setSaldo(this.getSaldo() - 20.0f);
        }
    }

    int getnumConta() {
        return this.numConta;
    }

    void setnumConta(int n) {
        this.numConta = n;
    }

    String getTipo() {
        return this.tipo;
    }

    void setTipo(String t) {
        this.tipo = t;
    }

    String getDono() {
        return this.dono;
    }

    void setDono(String d) {
        this.dono = d;
    }

    float getSaldo() {
        return this.saldo;
    }

    void setSaldo(float s) {
        this.saldo = s;
    }

    boolean getStatus() {
        return this.status;
    }

    void setStatus(boolean s) {
        this.status = s;
    }
}