import { FormControl, Validators } from "@angular/forms";

export const F_login = {
    "username": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [Validators.required])
}