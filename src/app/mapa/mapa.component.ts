import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})


export class MapaComponent implements OnInit {

  @ViewChild('divMap')divMap:ElementRef
  mapa: google.maps.Map;
 
  constructor() { 

   
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         this.loadMap(position);
      })
    } else {
      console.log('Actualizate!!');
    }
  }

  loadMap(position) {
    const mapOptions = {           
              //rem -aquí se pone el centro del mapa
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 11,             
      mapTypeId: google.maps.MapTypeId.HYBRID
    }     
                //elem html donde vamos a colocar el mapa y opciones
     new google.maps.Map(this.divMap.nativeElement, mapOptions)
    


//api key :   AIzaSyCy5m1nCk3a1QspDl-4RN56bbjd-bNeYfI

