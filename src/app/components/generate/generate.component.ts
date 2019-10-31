import { Component, OnInit } from '@angular/core';
import { MazemakerService } from '../../mazemaker.service'
import { MazeplayService } from '../../mazeplay.service'
//import { Cell } from '../../models/cell'
//import { DeprecatedDatePipe } from '@angular/common';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  constructor(
    private mazemaker: MazemakerService,
    private mazeplay: MazeplayService
    ) {}

  ngOnInit() {
    this.onInitMaze()                //initalize the overall game environment
    this.generateMaze()            //by pressing both player control buttons
   }

  onInitMaze(){                      //listener for the Clearmaze button
    this.mazemaker.initBoard()
    this.mazemaker.initCursor()
    this.mazemaker.redrawBoard()
    this.mazeplay.initPlayer()
    this.generateMaze()
  }

  generateMaze(){
    let keepgoing:boolean = true
    while (keepgoing) {               //iterate until maze generation is complete
      let result:string = this.mazemaker.runAlgo()
      if (result === 'complete') {keepgoing = false}  
      this.mazeplay.board  = this.mazemaker.board
      console.log('board has moved over:')
    }
    this.mazemaker.redrawBoard()
    this.mazeplay.drawPlayer()
  }
}
