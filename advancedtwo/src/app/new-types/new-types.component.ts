import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let camera = null;


    // simulation , duration 0.9s

    /*setTimeout(()=>{
      camera = { id:"15qs15" , isReady : true }
    },?)

    setTimeout(()=>{
      console.log("Camera :",camera);
    },?)*/
 

    //this.startPhotoSnaphot();


    this.tarckMyPosition().subscribe((data)=>{
      console.log(data);
      
    })

  }

  tarckMyPosition(){
    let locations = new Observable((observer)=>{ 
      navigator.geolocation.watchPosition((position)=>{
        observer.next(position);
        
      },(err)=>{
        observer.error(err);
      }) 
    })

    return locations;
  }



  //async startPhotoSnaphot(){
        
    /*console.log("trying to get the camera..."); 

    this.getCamera().then((data)=>{
      console.log(data);
       console.log("prendre une photo");

       this.prendrePhoto(data).then((photo)=>{
        console.log(photo);
        
       }).catch((err)=>{

       })

    }).catch((err)=>{
      alert(err.message)
    }) */

    /****************************************************** */
    /*console.log("trying to get the camera...")
    const camera = await this.getCamera(); 
    const photo = await this.prendrePhoto(camera);

    console.log(photo);
    
    

  }*/


  /*getCamera(){
    let camera = new Promise((success,error)=>{ 
      setTimeout(()=>{ 

        success( { status: "ok" } )
        //error({ message : "camera is broken" }  ); 

      },3000)
    })

    return camera;
  }



  prendrePhoto(camera){
    let photo = new Promise((success,error)=>{
      // user -_- , prednre une photo
      // 15s 

      setTimeout(()=>{
        success({ photoURL : 'custom.url' })
      },4000)
    })

    return photo;
  }*/

  /************************************************************************************************************ */






}
