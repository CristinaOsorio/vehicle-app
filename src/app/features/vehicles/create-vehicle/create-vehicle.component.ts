import { Component, inject } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { statusValidator } from '../../../core/custom-validators/status.validators';
import { VehicleStatus } from '../../../core/enums/vehicle-status.enum';
import { setBackendValidationErrors } from '../../../core/handles/set-backend-validations-errors.handle';
import { VehicleService } from '../../../core/services/vehicle.service';

@Component({
    selector: 'app-create-vehicle',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './create-vehicle.component.html',
})
export default class CreateVehicleComponent {
    vehicleForm!: FormGroup;
    vehicleStatus = VehicleStatus;

    router = inject(Router);
    fb = inject(FormBuilder);
    vehicleService = inject(VehicleService);

    ngOnInit(): void {
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
            status: ['', Validators.required, statusValidator()],
        });
    }

    onSubmit(): void {
        if (this.vehicleForm.invalid) {
            alert(
                'El formulario es inválido. Asegúrese de que todos los campos requeridos estén completos y correctos.'
            );
            return;
        }
        this.vehicleService.create(this.vehicleForm.value).subscribe({
            next: () => {
                const { vin } = this.vehicleForm.value;
                alert(
                    `El vehículo ha sido creado con éxito. VIN: ${vin} ha sido registrado.`
                );

                this.vehicleForm.reset();
                this.router.navigate(['/vehicles']);
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
}
