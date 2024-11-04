import { Pipe, PipeTransform } from '@angular/core';
import { VehicleStatus } from '../../enums/vehicle-status.enum';

@Pipe({
    name: 'vehicleStatusLabel',
    standalone: true,
})
export class VehicleStatusLabelPipe implements PipeTransform {
    transform(status: VehicleStatus): { label: string; color: string } {
        switch (status) {
            case VehicleStatus.Active:
                return { label: 'Activo', color: 'bg-green-500' };
            case VehicleStatus.Inactive:
                return { label: 'Dado de Baja', color: 'bg-red-500' };
            default:
                return { label: 'Desconocido', color: 'bg-gray-500' };
        }
    }
}
