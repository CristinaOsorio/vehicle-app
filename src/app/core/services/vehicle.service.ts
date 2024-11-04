import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles`;
    http = inject(HttpClient);

    getVehicles(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
