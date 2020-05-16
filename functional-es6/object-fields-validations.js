const currentInputValues = {
    firstName: 'Ibrahim', // Must be at least 2 characters
    lastName: 'Uylas', // Must be at least 2 characters
    zipCode: '123', // Must be exactly 5 characters
    state: 'A', // Must be exactly 2 characters
    email: '',
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2
            ? undefined
            : 'First name must be at least 2 characters',
    ],
    lastName: [
        value => value.length >= 2
            ? undefined
            : 'Last name must be at least 2 characters',
    ],
    zipCode: [
        value => value.length === 5
            ? undefined
            : 'Zip must be exactly 5 characters long',
    ],
    state: [
        value => value.length === 2
            ? undefined
            : 'State must be exactly 2 characters long',
    ],
};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName) => [
        ...acc,
        ...validate(inputs, criteria, fieldName),
    ], []).filter(message => message);
}

const validate = (inputs, criteria, fieldName) => {
    if (criteria[fieldName])
        return criteria[fieldName].map(validateField => validateField(inputs[fieldName]));

    return '';
}


console.log(getErrorMessages(currentInputValues, inputCriteria));
