/// <reference types="@types/google.maps" />
import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
interface UserLocation {
  latitude: number;
  longitude: number;
  timestamp: string;
}

@Component({
  selector: 'app-user-location-map',
  templateUrl: './user-location-map.component.html',
  styleUrls: ['./user-location-map.component.css']
})
export class UserLocationMapComponent implements AfterViewInit {
  locations: UserLocation[] = [];
  async ngAfterViewInit(): Promise<void> {
    // Load Google Maps script dynamically
    await this.loadGoogleMapsScript();

    // Once loaded, initialize the map
    await this.initMap();
  }

  // Load Google Maps JS API dynamically
  private loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // If Google Maps already loaded, resolve immediately
      if ((window as any).google && (window as any).google.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  }

  // Initialize the map and place a marker
  private async initMap(): Promise<void> {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    // Get user’s current position
    navigator.geolocation.getCurrentPosition(async (position) => {
      const userLocation: UserLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: new Date().toLocaleString()
      };
// Add location to the table array
      this.locations.push(userLocation);
      // ✅ Import Google Maps modules (modern approach)
    
    
    },
    (error) => {
      console.error('Error getting location:', error);
      alert('Unable to get your location. Please allow location access.');
    });
  }
}
