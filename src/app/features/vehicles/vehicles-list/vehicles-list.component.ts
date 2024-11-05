import { Component, inject, signal } from '@angular/core';
import { VehicleService } from '../../../core/services/vehicle.service';
import { Vehicle } from '../../../core/interfaces/vehicle.interface';
import { VehicleStatus } from '../../../core/enums/vehicle-status.enum';
import { VehicleStatusLabelPipe } from '../../../core/pipes/vehicle-status-label/vehicle-status-label.pipe';
import { ModalEditVehicleComponent } from '../components/modal-edit-vehicle/modal-edit-vehicle.component';
import { ConfirmInactiveVehicleComponent } from '../components/confirm-inactive-vehicle/confirm-inactive-vehicle.component';

@Component({
    selector: 'app-vehicles-list',
    standalone: true,
    imports: [
        VehicleStatusLabelPipe,
        ModalEditVehicleComponent,
        ConfirmInactiveVehicleComponent,
    ],
    templateUrl: './vehicles-list.component.html',
})
export default class VehiclesListComponent {
    vehicles = signal<Vehicle[]>([]);
    vehicleService = inject(VehicleService);
    vehicleStatus = VehicleStatus;

    selectedVehicle: any = null;
    isModalOpen = false;
    isConfirmInactiveModalOpen = false;

    ngOnInit() {
        this.vehicleService.getVehicles().subscribe({
            next: (res) => {
                this.vehicles.set(res.data);
            },
            error: (err) => {
                console.error('Error fetching vehicles:', err);
            },
        });
    }

    openEditModal(vehicle: any) {
        this.selectedVehicle = vehicle;
        this.isModalOpen = true;
    }

    openConfirmInactivateModal(vehicle: any) {
        this.selectedVehicle = vehicle;
        this.isConfirmInactiveModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
        this.isConfirmInactiveModalOpen = false;
        this.selectedVehicle = null;
    }

    updatedVehicles(updatedVehicle: Vehicle) {
        this.vehicles.update((vehicles) =>
            vehicles.map((vehicle) =>
                vehicle.id == updatedVehicle.id ? updatedVehicle : vehicle
            )
        );
        this.closeModal();
    }
}
