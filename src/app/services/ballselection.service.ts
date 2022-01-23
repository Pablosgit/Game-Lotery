import { Injectable } from '@angular/core';
import { Observable, of, Subject} from "rxjs";
import {Ball} from '../modal/ball-option';
import {DataBalls} from '../data/data-balls';

@Injectable({
  providedIn: 'root'
})

export class BallselectionService {

  selectedballs : Ball[] = [];
  numBalls$:Subject<number> = new Subject();
  selectedBalls$:Subject<Ball[]> = new Subject();
  totalPriceBet: number = 0;

  constructor() { }

  // Obtiene las bolas de la base de datos y las pinta.
  getBalls():Ball[] {
    return DataBalls
  }

  // Genera un array nuevo con las bolas seleccionadas por el usuario
  setSelectedBall(ball:Ball){
      ball.selected = true;
      this.selectedballs.push(ball);
      this.numBalls$.next(this.selectedballs.length);
      this.selectedBalls$.next(this.selectedballs);
  }

  // Devuelve true o false si la bola se encuentra seleccionada o no
  isSelectedBall(ball:Ball):boolean{
    return this.selectedballs.includes(ball);
  }

  // Devuelve el numero de bolas seleccionada
  getNumselectedBall():number{
    return this.selectedballs.length;
  }

  // Devuelve las bolas seleccionadas por el usuario en un observable
  getSelectedBall$(): Observable<Ball[]>{
    return this.selectedBalls$;
  }

  // Devuelve el número de bolas seleccionadas por el usuario en un observable
  getNumBalls$(): Observable<number>{
    return this.numBalls$.asObservable();
  }

  getSelectedBalls(){
    return this.selectedballs
  }

  // Reinicia el número de bolas seleccionadas.
  remove(){
    this.selectedballs.map(ball => ball.selected = false);
    this.selectedballs = [];
    this.numBalls$.next(0);
    this.selectedBalls$.next(this.selectedballs);
  }

  // Para pintar total euros apuesta.
  getTotalBet(bet:number){
      return this.totalPriceBet =  this.selectedballs.length * bet * 1.5 ;
  }

  // Para generar Randow aleatorio.
  getRandomNumber(): Observable<number> {
    return of(Math.round(Math.random() * (10 - 1) + 1));
  }

}
