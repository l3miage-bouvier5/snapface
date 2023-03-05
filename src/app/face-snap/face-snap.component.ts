import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap
  buttonText! :string

  constructor(private fsService : FaceSnapService,
              private route:Router){}

  ngOnInit(): void {
    this.buttonText = "Oh Snap !"
  }

  onSnap(){
    if(this.buttonText ==='Oh Snap !'){
      this.fsService.snapFaceSnapById(this.faceSnap.id,'snap')
      this.buttonText = 'Oops, un Snap!'
    }else{
      this.fsService.snapFaceSnapById(this.faceSnap.id,'unsnap')
      this.buttonText = 'Oh Snap !'
    }
  }
  onViewFaceSnap(){
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
