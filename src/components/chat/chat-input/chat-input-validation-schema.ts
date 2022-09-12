import * as yup from 'yup';

export const chatInputValidationSchema = yup.object().shape({
  message: yup
    .string()
    .required('Message is required')
    .matches(/[^-\s]/, 'You cannot enter an empty message'),
});
