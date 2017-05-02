import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, plt: Platform, private nativeAudio: NativeAudio, private vibration: Vibration) {
     plt.ready().then((readySource) => {
       this.nativeAudio.preloadSimple('snare', '../assets/snare.mp3').then(this.onSuccess, this.onError);
    });
    
  }

  play(){
    this.vibration.vibrate(1000);
    this.nativeAudio.play('snare').then(this.onSuccess, this.onError);
  }

  onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }

  
}
