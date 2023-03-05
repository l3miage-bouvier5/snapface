import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!:FaceSnap
  buttonText! :string

  constructor(private fsService : FaceSnapService,
              private route : ActivatedRoute){}



    ngOnInit(){
      this.buttonText = "Oh Snap !"
      const snapId = +this.route.snapshot.params['id']
      this.faceSnap = this.fsService.getFaceSnapById(snapId)
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
}
