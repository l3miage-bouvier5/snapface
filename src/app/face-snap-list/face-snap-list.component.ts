import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  
  faceSnaps$!:Observable<FaceSnap[]>

  constructor(private faceSnapService : FaceSnapService){
    
  } 

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps()
  }
  

  
}
