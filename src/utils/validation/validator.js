import { regex } from './regex.js';
import { fieldTypes } from './fieldTypes.js';

const CARD_NUMBER_LENGTH = 16;
export const methods = {
  nonZeroLength: value => value && value.length > 0,
  validStringLength: value => value && regex.minMaxLength.test(value),
  validCardNumberLength: value => value.length === CARD_NUMBER_LENGTH,
};

const instructions = {
  [fieldTypes.name]: [
    {
      validationMethod: methods.nonZeroLength,
      errorMsg: 'Field is required',
    },
    {
      validationMethod: methods.validStringLength,
      errorMsg: 'Min symbol lengt is 5 and max 15 symbols',
    },
    {
      validationMethod: value => value.match(fieldTypes.userName),
      errorMsg: 'Use correct symbols',
    },
  ],

  [fieldTypes.cardNumber]: [
    {
      validationMethod: methods.nonZeroLength,
      errorMsg: 'Field is required',
    },
    {
      validationMethod: methods.validCardNumberLength,
      errorMsg: 'Should be 16 symbols length',
    },
  ],

  [fieldTypes.expireDate]: [
    {
      validationMethod: methods.nonZeroLength,
      errorMsg: 'Field is required',
    },
    {
      validationMethod: value => value && regex.expireDate.test(value),
      errorMsg: 'Should be format MM/YY',
    },
  ],

  [fieldTypes.email]: [
    {
      validationMethod: methods.nonZeroLength,
      errorMsg: 'Field is required',
    },
    {
      validationMethod: value => value && regex.email.test(value),
      errorMsg: 'Should be correct email',
    },
  ],
};


export const isFieldsValid = errors => !Object.values(errors).some(errorMsg => !!errorMsg);

export const validator = (fieldType, value) => {
  const validateMethods = instructions[fieldType];

  if (validateMethods) {
    const error = validateMethods.find(({ validationMethod }) => !validationMethod(value));

    return error
      ? error.errorMsg
      : '';

  }

  return '';
};

