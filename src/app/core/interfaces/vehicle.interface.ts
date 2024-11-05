import { VehicleStatus } from '../enums/vehicle-status.enum';

export interface BaseVehicle {
    vin: string;
    model: string;
    license_plate: string;
    status: VehicleStatus;
}

export interface Vehicle extends BaseVehicle {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface UpdateVehicle extends BaseVehicle {
    id: number;
}

export interface CreateVehicle {}
