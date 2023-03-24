import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapService {

    constructor(private http : HttpClient){

    }


    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title: 'Archibald',
          description : 'Mon meilleur ami depuis tout petit',
          createdDate : new Date(),
          snaps: 165,
          imageUrl : "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
        },
       {  id:2,
          title: 'Three Rock Mountain',
          description : 'Un endroit magnifique pour les randonnées',
          createdDate : new Date(),
          snaps: 1732,
          imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Olympus_Jan_2003_337w.jpg/272px-Olympus_Jan_2003_337w.jpg"
        },
        { id:3,
          title: 'un bon repas',
          description : 'Mmmmmh que c\'est bon',
          createdDate : new Date(),
          snaps: 237,
          imageUrl : "https://tse4.mm.bing.net/th?id=OIP.Pqowhn9fvzNJy0FmfVRqnAHaEo&pid=Api",
          location:'Paris'
        }
      ]

      getAllFaceSnaps():Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
      }

      snapFaceSnapById(faceSnapId : number,snapType: 'snap'|'unsnap'):Observable<FaceSnap>{
        return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
            ...faceSnap,
            snaps : faceSnap.snaps + (snapType === 'snap' ? +1 : -1)
          })),
          switchMap(updateFS => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`,
            updateFS
          ))
        )
      }
      getFaceSnapById(faceSnapId : number):Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
      }

      addFaceSnap(formValue : {title: string, description : string, imageUrl : string, location : string}) : Observable<FaceSnap>{
        return this.getAllFaceSnaps().pipe(
          map( facesnaps => [...facesnaps].sort((a,b)=> a.id - b.id)),
          map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
          map(previousFaceSnap => ({
            ...formValue,
            snaps : 0,
            createdDate : new Date(),
            id : previousFaceSnap.id + 1
          })),
          switchMap(newFaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`,newFaceSnap))
        )
      }
}