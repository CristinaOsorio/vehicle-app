import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    CreateVehicle,
    UpdateVehicle,
    Vehicle,
} from '../interfaces/vehicle.interface';
import { ApiResponse } from '../interfaces/api-response.interface';

@Injectable({
    providedIn: 'root',
})
export class VehicleService {
    http = inject(HttpClient);

    private apiUrl = `${environment.apiUrl}/vehicles`;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    getVehicles() {
        return this.http.get<ApiResponse<Vehicle[]>>(this.apiUrl);
    }

    create(vehicle: CreateVehicle): Observable<ApiResponse<Vehicle>> {
        return this.http.post<ApiResponse<Vehicle>>(
            this.apiUrl,
            vehicle,
            this.httpOptions
        );
    }

    updated(vehicle: UpdateVehicle): Observable<ApiResponse<Vehicle>> {
        return this.http.put<ApiResponse<Vehicle>>(
            `${this.apiUrl}/${vehicle.id}`,
            vehicle,
            this.httpOptions
        );
    }
}
