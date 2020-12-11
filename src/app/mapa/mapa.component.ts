
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() {
    this.lat = 40
    this.lng = -3

  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

}
//  import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';

//  @Component({
//  selector: 'app-mapa',
//  templateUrl: './mapa.component.html',
// styleUrls: ['./mapa.component.css']
//  };


// export class MapaComponent implements OnInit {}

//   @ViewChild('divMap')divMap:ElementRef;

// //  mapa: google.maps.Map;
//   // markers: google.maps.Marker[];

//   constructor() { 


//   }

//   ngOnInit() {
//     //get current position
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//          this.loadMap(position);
//       })
//     } else {
//       console.log('Actualizate!!');
//     }
//   }

//   loadMap(position) {
//        const mapOptions = {           

//           center: new google.maps.LatLng(position.coords. latitude, position.coords.longitude),
//            zoom: 11,             
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//     }     

//       const mapa= new google.maps.Map(this.divMap.nativeElement, mapOptions);

//       const icon={

//         // url:' "https://developers.google.com/maps/documentation/javascript/examples/full/images/"',
//         scaledSize:new google.maps.Size(100,100)
//       }

//       const marker=new google.maps.Marker({

//          position:mapOptions.center,
//          animation:google.maps.Animation.BOUNCE


//      });

//          marker.setMap(mapa);
//         //  marker.setIcon('../../assets/images/localizador.jpg')

//         google.maps.event.addListener(mapa, 'click', event => {
//          console.log(event.latLng.lat())
//         });

//     }

//   }





