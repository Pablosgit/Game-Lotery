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

  // Get the balls from the database
  getBalls():Ball[] {
    return DataBalls
  }

  // Generate a new array with the balls selected by the user
  setSelectedBall(ball:Ball){
      ball.selected = true;
      this.selectedballs.push(ball);
      this.numBalls$.next(this.selectedballs.length);
      this.selectedBalls$.next(this.selectedballs);
  }

  // Get number of balls selected
  isSelectedBall(ball:Ball):boolean{
    return this.selectedballs.includes(ball);
  }

  // Get number ball selected
  getNumselectedBall():number{
    return this.selectedballs.length;
  }

  // Get ball selected observable
  getSelectedBall$(): Observable<Ball[]>{
    return this.selectedBalls$;
  }

  // Get num balls observable
  getNumBalls$(): Observable<number>{
    return this.numBalls$.asObservable();
  }

  // Get all selected ball
  getSelectedBalls(){
    return this.selectedballs
  }

  // Reset the number of selected balls
  remove(){
    this.selectedballs.map(ball => ball.selected = false);
    this.selectedballs = [];
    this.numBalls$.next(0);
    this.selectedBalls$.next(this.selectedballs);
  }

  // Get the total bet
  getTotalBet(bet:number){
      return this.totalPriceBet =  this.selectedballs.length * bet * 1.5 ;
  }

  // Get random balls
  getRandomNumber(): Observable<number> {
    return of(Math.round(Math.random() * (10 - 1) + 1));
  }

}
