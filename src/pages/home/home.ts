import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, transition, style, state, animate, keyframes } from '@angular/core'
import { MainPage } from '../main/main';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [


  trigger('bounce', [
  	state('*', style({
  		transform: 'translateX(0)'
  	})),
  	transition('* => rightSwipe', animate('700ms ease-out', keyframes([
  		style({transform: 'translateX(0)', offset: 0}),
  		style({transform: 'translateX(-65px)', offset: 0.3}),
		style({transform: 'translateX(0)', offset: 1.0})
  		]))),
  	transition('* => leftSwipe', animate('700ms ease-out', keyframes([
  		style({transform: 'translateX(0)', offset: 0}),
  		style({transform: 'translateX(-65px)', offset: 0.3}),
		style({transform: 'translateX(0)', offset: 1.0})
  		])))
  ])
  ]
  })
export class HomePage {
	@ViewChild(Slides) slides: Slides;
	skipMsg: string =  "skip";
	state: string = 'x';

  constructor(public navCtrl: NavController) {
   
}

skip() {
  	this.navCtrl.push(MainPage);
  }

slideChanged(){
	if (this.slides.isEnd())
		this.skipMsg = "finish";
	else 
		this.skipMsg = "skip";
}

SlideMoved() {
	if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
		this.state = 'rightSwipe';
	else
		this.state = 'leftSwipe';
}

animationDone() {
	this.state = 'x';
}
}