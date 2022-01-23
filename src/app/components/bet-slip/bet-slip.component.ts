import { Component, OnInit } from '@angular/core';
import { BallselectionService} from '../../services/ballselection.service'
import {Ball} from '../../modal/ball-option';
import {Subscription} from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  ballsSelected: Ball[] = []
  numBalls = 0;
  betUser = 0;
  totalBetUser: number = 0
  minbetUser: number = 5;
  resulBet: number = 0;
  showResults: boolean = false;
  formBet = new FormGroup ({
    betUser: new FormControl(
      0,[
        Validators.required,
        Validators.min(this.minbetUser)
      ]),
  })
  private subscription = new Subscription();

  constructor(private ballService: BallselectionService) {

    this.subscription = this.ballService.getNumBalls$().subscribe(
      newNumBalls => this.numBalls = newNumBalls
    );

    this.subscription = this.ballService.getSelectedBall$().subscribe(
      newSelectedBalls => this.ballsSelected = newSelectedBalls
    );

  }

  onCalcTotalBet():void{
    this.totalBetUser = this.ballService.getTotalBet(this.betUser);
  }

  placeBet():void{
    this.subscription = this.ballService.getRandomNumber().subscribe(
      (newRandonNumber) => {
        this.resulBet = newRandonNumber
        this.showResults = true;
      });
  }


  restartGame() {
    this.showResults = false;
    this.ballService.remove();
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackByBalls(index: number, item: any): number{
    return item.id;
  }

}
