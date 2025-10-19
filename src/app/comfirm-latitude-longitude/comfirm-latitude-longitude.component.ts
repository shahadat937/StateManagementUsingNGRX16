import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComfirmLatitudeLongitude, ComfirmLatitudeService } from '../comfirm-latitude.service';
interface Location {
  latitude: number;
  longitude: number;
  timestamp: string;
}
@Component({
  selector: 'app-comfirm-latitude-longitude',
  templateUrl: './comfirm-latitude-longitude.component.html',
  styleUrls: ['./comfirm-latitude-longitude.component.css']
})
export class ComfirmLatitudeLongitudeComponent {
  locations: Location[] = [];
  constructor(
    private locationService: ComfirmLatitudeService,
    private snackBar: MatSnackBar
  ) {}

  getLocationAndSend() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
      const location: Location = {
            latitude,
            longitude,
            timestamp: new Date().toLocaleString()
          };

          // Add to table array
          this.locations.push(location);
          const payload: ComfirmLatitudeLongitude = { latitude, longitude };
          // this.locationService.saveLocation(payload).subscribe({
          //   next: (res) => {
          //     this.snackBar.open('Location saved successfully!', 'Close', { duration: 3000 });
          //   },
          //   error: (err) => {
          //     this.snackBar.open('Failed to save location.', 'Close', { duration: 3000 });
          //   }
          // });
        },
        // (error) => {
        //   this.snackBar.open('Error getting location.', 'Close', { duration: 3000 });
        // },
        // { enableHighAccuracy: true }
      );
    } 
    else {
      this.snackBar.open('Geolocation not supported.', 'Close', { duration: 3000 });
    }
  }
  
}
