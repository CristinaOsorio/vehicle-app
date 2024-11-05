import { FormGroup } from '@angular/forms';

export function setBackendValidationErrors(form: FormGroup, messages: any[]) {
    messages.forEach((error: any) => {
        const control = form.get(error.path);
        if (control) {
            control.setErrors({ backend: error.msg });
            control.markAsDirty();
        }
    });
}
