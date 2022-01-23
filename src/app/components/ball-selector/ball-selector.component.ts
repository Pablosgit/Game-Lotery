import { Component, OnInit } from '@angular/core';
import {Ball} from '../../modal/ball-option';
import {BallselectionService} from '../../services/ballselection.service'

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  balls : Ball[];
  isSelectedBall: boolean = false;
  maxSectedBall: number = 8;


  constructor( private ballService:BallselectionService ) {
    this.balls = this.ballService.getBalls()
  }

  onSelectBall(ball:Ball):void{
    this.isSelectedBall= this.ballService.isSelectedBall(ball);
    if (!this.isSelectedBall && this.ballService.getNumselectedBall() < this.maxSectedBall) {
      this.ballService.setSelectedBall(ball);
    }
  }

  onclearSelection():void{
    this.ballService.remove();
  }


  ngOnInit(): void {
  }

}
