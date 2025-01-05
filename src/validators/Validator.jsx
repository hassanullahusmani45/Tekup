import rules from "./Rules";
import Regex from "./Regex";

const Validator = (value, validations) => {
    let errorMessage = null;
    let validationResulte = true;

    for (const validator of validations) {
        if (validator.value === rules.requiredValue) {
            if (value.trim().length === 0) {
                errorMessage = "This field is required.";
                validationResulte = false;
            }
        }
        if (validator.value === rules.emailValue) {
            if (!Regex.isValidEmail(value)) {
                errorMessage = "Please enter a valid email address.";
                validationResulte = false;
            }
        }
        if (validator.value === rules.minValue) {
            if (value.trim().length < validator.min) {
                errorMessage = `Minimum ${validator.min} characters required.`;
                validationResulte = false;
            }
        }
        if (validator.value === rules.maxValue) {
            if (value.trim().length > validator.max) {
                errorMessage = `Maximum ${validator.max} characters allowed.`;
                validationResulte = false;
            }
        }

    }

    return { validationResulte, errorMessage };
};

export default Validator;
