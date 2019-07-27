import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
    selector: 'app-station',
    templateUrl: './station.component.html',
    styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

    stationIndex: number;
    stations: any;

    private url = 'http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe';

    latitude: number;
    longitude: number;

    constructor(private http: HttpClient, private router: ActivatedRoute) {
    }

    ngOnInit() {
        const map = L.map('map').setView([52.4069200, 16.9299300], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?key=HfiQgsMsSnorjEs2Sxek', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var icon = L.icon({
            iconSize: [40, 40],
            iconAnchor: [13, 41],
            iconUrl: './assets/img/location.png',
        });

        this.router.params.subscribe(params =>
            this.stationIndex = params['id']
        );

        this.http.get(this.url)
            .subscribe(data => {
                this.stations = data;
                this.longitude = this.stations.features[this.stationIndex].geometry.coordinates[0];
                this.latitude = this.stations.features[this.stationIndex].geometry.coordinates[1];

                L.marker([this.latitude, this.longitude], { icon: icon }).addTo(map);
            });
    }
}