import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!:FaceSnap
  buttonText :string = 'Oh Snap !'

  constructor(private fsService : FaceSnapService){}

  onSnap(){
    if(this.buttonText ==='Oh Snap !'){
      this.fsService.snapFaceSnapById(this.faceSnap.id,'snap')
      this.buttonText = 'Oops, un Snap!'
    }else{
      this.fsService.snapFaceSnapById(this.faceSnap.id,'unsnap')
      this.buttonText = 'Oh Snap !'
    }
  }
}
