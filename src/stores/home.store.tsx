import { action, observable } from 'mobx';

export default class HomeStore {

  @observable etanol = 0;
  @observable gasolina = 0;
  @observable resultado = '';

  @action calculate = () => {
    const { etanol, gasolina } = this;
    if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      if ((Number(etanol)==0) || (Number(gasolina)==0)) {
        this.resultado = 'O valor do etanol e da gasolina não podem ser zero';
      } else {

        const value = Number(etanol) / Number(gasolina);

        if (value > 0.70) {
          this.resultado = 'Vale a pena gasolina';
        } else if (value < 0.70) {
          this.resultado = 'Vale a pena etanol';
        } else {
          this.resultado = 'São equivalentes';
        }
      }
    } else {
      this.resultado = 'Informe um número e utilize ponto(.) como separador decimal!';
    }
  }

  @action handleForm = (input) => {
    const key = Object.keys(input)[0];
    const value = input[key];
    this[key] = value;
  }

}
const homeStore = new HomeStore();

export { homeStore };
