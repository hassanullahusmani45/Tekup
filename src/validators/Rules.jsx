

const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";

export const required = () => ({
    value: requiredValue
});

export const min = (min) => ({
    value: minValue,
    min
});

export const max = (max) => ({
    value: maxValue,
    max
});

export const email = () => ({
    value: emailValue
});

export default { requiredValue, minValue, maxValue, emailValue }