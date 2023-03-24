import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
  faceSnap$!: Observable<FaceSnap>;

  constructor(private fsService : FaceSnapService,
              private route : ActivatedRoute){}



    ngOnInit(){
      this.buttonText = "Oh Snap !"
      const snapId = +this.route.snapshot.params['id']
      this.faceSnap$ = this.fsService.getFaceSnapById(snapId)
    }

  onSnap(id:  number){
    if(this.buttonText ==='Oh Snap !'){
      this.faceSnap$ = this.fsService.snapFaceSnapById(id,'snap').pipe(
        tap(() => {
          this.buttonText = 'Oops, un Snap!'
          
        })
      )
    }else{
      this.faceSnap$ = this.fsService.snapFaceSnapById(id,'unsnap').pipe(
        tap(()=> {
          this.buttonText = 'Oh Snap !'
        })
      )

    }
  }
}
