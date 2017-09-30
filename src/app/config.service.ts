// Created By : Sangwin Gawande (http://sangw.in)

import { AbstractControl, ValidatorFn } from '@angular/forms';
export class ConfigService {

	constructor() { }

}

export class ValidationService {

	static emailValidator(control) {
		// RFC 2822 compliant regex
		if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
			return null;
		} else {
			return { 'invalidEmailAddress': true };
		}
	}

	static passwordValidator(control) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
			return null;
		} else {
			return { 'invalidPassword': true };
		}
	}

	static checkLimit(min: number, max: number): ValidatorFn {
		return (c: AbstractControl): { [key: string]: boolean } | null => {
			if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
				return { 'range': true };
			}
			return null;
		};
	}
}

// Created By : Sangwin Gawande (http://sangw.in)