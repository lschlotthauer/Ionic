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
       this.nativeAudio.preloadSimple("snare", "assets/snare.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("bass", "assets/bass.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("bongo", "assets/bongo.mp3").then(this.onSuccess, this.onError);
       this.nativeAudio.preloadSimple("highhat", "assets/highhat.mp3").then(this.onSuccess, this.onError);
    });
    
  }

  playSnare(){
    this.nativeAudio.play("snare").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playBass(){
    this.nativeAudio.play("bass").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playBongo(){
    this.nativeAudio.play("bongo").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }
    playHighhat(){
    this.nativeAudio.play("highhat").then(this.onSuccess, this.onError);
    this.vibration.vibrate(100);
  }

  onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }

  
}
