import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { statusValidator } from '../../../../core/custom-validators/status.validators';
import { VehicleStatus } from '../../../../core/enums/vehicle-status.enum';
import { setBackendValidationErrors } from '../../../../core/handles/set-backend-validations-errors.handle';
import { VehicleService } from '../../../../core/services/vehicle.service';
import { Vehicle } from '../../../../core/interfaces/vehicle.interface';

@Component({
    selector: 'app-modal-edit-vehicle',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './modal-edit-vehicle.component.html',
})
export class ModalEditVehicleComponent {
    @Input() vehicle!: Vehicle;
    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<Vehicle>();

    vehicleForm: FormGroup;
    vehicleStatus = VehicleStatus;

    router = inject(Router);
    fb = inject(FormBuilder);
    vehicleService = inject(VehicleService);

    constructor() {
        this.vehicleForm = this.fb.group({
            license_plate: [
                '',
                [Validators.required, Validators.pattern('^[A-Za-z0-9]{7}$')],
            ],
            vin: [
                '',
                [Validators.required, Validators.pattern('^[A-Za-z0-9]{17}$')],
            ],
            model: ['', Validators.required],
        });
    }

    ngOnChanges() {
        if (this.vehicle) {
            this.vehicleForm.patchValue(this.vehicle);
        }
    }

    onSubmit(): void {
        if (!this.isFormModified()) {
            alert(
                'No se ha realizado ningún cambio en el vehículo. No se ha enviado el formulario.'
            );
            return;
        }

        if (this.vehicleForm.invalid || !this.isFormModified()) {
            alert(
                'El formulario es inválido. Asegúrese de que todos los campos requeridos estén completos y correctos.'
            );
            return;
        }

        const payload = {
            id: this.vehicle.id,
            status: this.vehicle.status,
            ...this.vehicleForm.value,
        };

        this.vehicleService.updated(payload).subscribe({
            next: () => {
                const { vin } = this.vehicleForm.value;
                alert(
                    `El vehículo con VIN: ${vin} ha sido actualizado con éxito.`
                );

                this.save.emit({ ...this.vehicle, ...this.vehicleForm.value });
                this.vehicleForm.reset();
                return;
            },
            error: (error) => {
                if (error.error.message == 'Validation errors') {
                    setBackendValidationErrors(
                        this.vehicleForm,
                        error.error.errors
                    );
                }
            },
        });
    }

    isFormModified(): boolean {
        const currentValues = this.vehicleForm.getRawValue();
        const originalValues = {
            license_plate: this.vehicle.license_plate,
            vin: this.vehicle.vin,
            model: this.vehicle.model,
        };
        return JSON.stringify(currentValues) !== JSON.stringify(originalValues);
    }

    get licensePlate() {
        return this.vehicleForm.get('license_plate');
    }

    get vin() {
        return this.vehicleForm.get('vin');
    }

    get model() {
        return this.vehicleForm.get('model');
    }

    onClose() {
        this.close.emit();
    }
}
