import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image:String="https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png";
  public titulo:String="Curso de Angular con interpolación";

  constructor(){}

  ngOnInit(): void {
    
  }


}
