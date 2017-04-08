import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 constructor(private vibration: Vibration) { }

 createVibration() {

this.vibration.vibrate(1000);

this.vibration.vibrate([2000,1000,2000]);
}
   cancelVibration(){

   	this.vibration.vibrate(0);
   }

}