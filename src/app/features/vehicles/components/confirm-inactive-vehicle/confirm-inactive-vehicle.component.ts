import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Vehicle } from '../../../../core/interfaces/vehicle.interface';
import { VehicleService } from '../../../../core/services/vehicle.service';
import { VehicleStatus } from '../../../../core/enums/vehicle-status.enum';

@Component({
    selector: 'app-confirm-inactive-vehicle',
    standalone: true,
    imports: [],
    templateUrl: './confirm-inactive-vehicle.component.html',
})
export class ConfirmInactiveVehicleComponent {
    @Input() vehicle!: Vehicle;
    @Output() confirmed = new EventEmitter<Vehicle>();
    @Output() close = new EventEmitter<void>();

    vehicleService = inject(VehicleService);

    onConfirm() {
        this.vehicle.status = VehicleStatus.Inactive;
        this.vehicleService.updated(this.vehicle).subscribe(() => {
            this.confirmed.emit(this.vehicle);
        });
    }

    onClose() {
        this.close.emit();
    }
}
