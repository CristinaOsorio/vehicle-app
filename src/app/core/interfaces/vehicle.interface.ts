import { VehicleStatus } from '../enums/vehicle-status.enum';

export interface BaseVehicle {
    vin: string;
    model: string;
    license_plate: string;
}

export interface Vehicle extends BaseVehicle {
    id: number;
    created_at: string;
    updated_at: string;
    status: VehicleStatus;
}

export interface UpdateVehicle extends BaseVehicle {
    id: number;
}

export interface CreateVehicle {
    status: VehicleStatus;
}
