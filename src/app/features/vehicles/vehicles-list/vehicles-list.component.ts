import { Component, inject } from '@angular/core';
import { VehicleService } from '../../../core/services/vehicle.service';
import { Vehicle } from '../../../core/interfaces/vehicle.interface';
import { VehicleStatus } from '../../../core/enums/vehicle-status.enum';
import { VehicleStatusLabelPipe } from '../../../core/pipes/vehicle-status-label/vehicle-status-label.pipe';

@Component({
    selector: 'app-vehicles-list',
    standalone: true,
    imports: [VehicleStatusLabelPipe],
    templateUrl: './vehicles-list.component.html',
})
export default class VehiclesListComponent {
    vehicles: Vehicle[] = [];
    vehicleService = inject(VehicleService);
    vehicleStatus = VehicleStatus;

    ngOnInit() {
        this.vehicleService.getVehicles().subscribe((vehicles) => {
            this.vehicles = vehicles;
        });
    }
}
