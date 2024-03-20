class Abstracao {
    constructor(nome) {
    if (new.target === Abstracao) {
        throw new Error('Não é possível instanciar objetos da classe abstrata Abstracao');
    }
    this.nome = nome;
    }  

    realizarAcao() {
    throw new Error('Método realizarAcao deve ser implementado nas subclasses');
    }
    }

    class SubClasse1 extends Abstracao {
    constructor(nome, detalhe) {
    super(nome);
    this.detalhe = detalhe;
    }

    realizarAcao() {
    console.log(`${this.nome} está realizando ação 1 com detalhe: ${this.detalhe}`);
    }
    }

    class SubClasse2 extends Abstracao {
    constructor(nome, quantidade) {
    super(nome);
    this.quantidade = quantidade;
    }

    realizarAcao() {
    console.log(`${this.nome} está realizando ação 2 com quantidade: ${this.quantidade}`);
    }
    }

    const obj1 = new SubClasse1('Objeto1', 'detalhe1');
    const obj2 = new SubClasse1('Objeto2', 'detalhe2');
    const obj3 = new SubClasse2('Objeto3', 10);

    obj1.realizarAcao();
    obj2.realizarAcao();
    obj3.realizarAcao();  