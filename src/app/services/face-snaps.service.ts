import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title: 'Archibald',
          description : 'Mon meilleur ami depuis tout petit',
          createdDate : new Date(),
          snaps: 0,
          imageUrl : "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
        },
       {  id:2,
          title: 'Three Rock Mountain',
          description : 'Un endroit magnifique pour les randonnées',
          createdDate : new Date(),
          snaps: 0,
          imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Olympus_Jan_2003_337w.jpg/272px-Olympus_Jan_2003_337w.jpg"
        },
        { id:3,
          title: 'un bon repas',
          description : 'Mmmmmh que c\'est bon',
          createdDate : new Date(),
          snaps: 0,
          imageUrl : "https://tse4.mm.bing.net/th?id=OIP.Pqowhn9fvzNJy0FmfVRqnAHaEo&pid=Api",
          location:'Paris'
        }
      ]

      getAllFaceSnaps():FaceSnap[]{
        return this.faceSnaps
      }

      snapFaceSnapById(faceSnapId : number,snapType: 'snap'|'unsnap'):void{
        let res = this.faceSnaps.find(fs => fs.id === faceSnapId);
        
        if(res){
            switch (snapType) {
                case 'snap':
                    res.snaps++;
                    break;
                case 'unsnap':
                    res.snaps--
                    break;
                default:
                    break;
            }
        }else{
            throw new Error("SnapFace not found");
        }
      }
      getFaceSnapById(faceSnapId : number):FaceSnap{
        let res = this.faceSnaps.find(fs => fs.id === faceSnapId);
        if(res){
            return res
        }else{
            throw new Error("SnapFace not found");
        }
      }
}