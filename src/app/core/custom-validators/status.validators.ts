import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export function statusValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const validStatuses = ['active', 'inactive'];
        return validStatuses.includes(control.value)
            ? of(null)
            : of({ invalidStatus: true });
    };
}
