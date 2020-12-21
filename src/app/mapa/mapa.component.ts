
import { Component, NgZone, OnInit } from '@angular/core';
import { Productor, ProductoresService } from '../services/productores.service';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChild('divMap') divMap: ElementRef;

  mapa: google.maps.Map;
  markers: google.maps.Marker[];

  productores:Productor[];
  lat: number;
  lon: number;
  


  constructor(
    private productoresService:ProductoresService,
    private ngZone:NgZone
  ) {
    this.lat = 40.333
    this.lon = -3.999
    
   
  }
  

  ngOnInit(): void {
    
    navigator.geolocation.getCurrentPosition(position => {

     
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
     

      
    });


    this.productoresService.getAll()
        .then(response => {
          this.productores = response;
          // console.log(this.productores)
        })
        .catch(error => console.log(error));
     
        
       /**buscar un lugar en el mapa */

      const autocomplete= new google.maps.places.Autocomplete(document.querySelector('#inputPlaces')
      );

      google.maps.event.addListener(autocomplete, 'place_changed',event=>{
      
        // console.log(event);
        const place= autocomplete.getPlace();
           this.ngZone.run(()=>{
                this.lat=place.geometry.location.lat()
                this.lon=place.geometry.location.lng()
                console.log(this.lat)
                console.log(this.lon)

           })
          
      })
    
  }

  

  
}






