import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { BallselectionService} from '../../services/ballselection.service'
import {Ball} from '../../modal/ball-option';

@Component({
  selector: 'app-bet-result',
  templateUrl: './bet-result.component.html',
  styleUrls: ['./bet-result.component.scss']
})
export class BetResultComponent implements OnInit {

  @Input() number: number = 0;
  @Output() restart = new EventEmitter<void>();
  public balls: Ball[] = []
  public message: string = '';


  constructor(private ballService: BallselectionService) {}

  ngOnInit(): void {
    this.balls = this.ballService.getBalls();
    const getWinner = this.ballService.getSelectedBalls()
      .find((ball) => ball.id === this.number);
    this.message = getWinner ? 'You Win' : 'You Lost';
  }

  public restartBet() {
    this.restart.emit();
  }

}
