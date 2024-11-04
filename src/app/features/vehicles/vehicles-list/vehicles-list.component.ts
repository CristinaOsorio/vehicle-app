import { Component, inject } from '@angular/core';
import { VehicleService } from '../../../core/services/vehicle.service';

@Component({
    selector: 'app-vehicles-list',
    standalone: true,
    imports: [],
    templateUrl: './vehicles-list.component.html',
})
export default class VehiclesListComponent {
    vehicles: any[] = [];
    vehicleService = inject(VehicleService);

    ngOnInit() {
        this.vehicleService.getVehicles().subscribe((vehicles) => {
            console.log(vehicles);
        });
    }
}
