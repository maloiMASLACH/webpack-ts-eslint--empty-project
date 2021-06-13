import { renderCar, renderWinnerCar } from '../car/car';
import { Page } from '../templates/page';

const garageURL = 'http://127.0.0.1:3000/winners';
interface WinnerCar{
  id:number,
  name:string,
  color:string,
  wins:number,
  time:number
}
let cars:WinnerCar[] = [];

export class Winners extends Page {
  static TextObg = {
    MainTitle: 'Winners',
  };

  showWinners() {
    fetch(garageURL).then((e) => e.json()).then((json) => {
      cars = [];
      return cars.push(...json);
    }).then(() => {
      cars.map((car) => {
        this.conteiner.innerHTML += renderWinnerCar(car);
        return car;
      });
    });
  }

  render() {
    const title = this.createHeader(Winners.TextObg.MainTitle);
    this.conteiner.append(title);
    this.showWinners();
    return this.conteiner;
  }
}
