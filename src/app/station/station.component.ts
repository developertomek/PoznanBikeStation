import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  stationIndex: number;

  private url = 'http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe';
  
  latitude = 52.3992702;
  longitude = 16.9199655;

  summit = marker([ 52.3992702, 16.9199655 ], {
    icon: icon({
      iconSize: [ 40, 40 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: './assets/img/location.png',
    })
  });

  constructor(private http: HttpClient, private router: ActivatedRoute) { 
  }
  

  ngOnInit() {
    this.router.params.subscribe( params =>
      this.stationIndex = params['id']      
    );
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?key=HfiQgsMsSnorjEs2Sxek', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      this.summit
    ],
    zoom: 11,
    center: latLng([ this.latitude, this.longitude ]),    
  };  
}
