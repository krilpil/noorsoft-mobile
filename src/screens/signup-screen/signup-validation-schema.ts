import * as yup from 'yup';

export const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({min}) => `Name must be at least ${min} characters`)
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/u, 'Enter your real name')
    .required('Name is required'),
  surname: yup
    .string()
    .min(2, ({min}) => `Surname must be at least ${min} characters`)
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/u, 'Enter your real surname')
    .required('Surname is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required')
    .matches(/\.[-0-9A-Za-z]{2,}/, 'Enter a valid email!'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .matches(/[A-Z]/, 'The password must contain uppercase letters!')
    .matches(/[a-z]/, 'The password must contain lowercase letters!')
    .matches(/[0-9]/, 'The password must contain numbers!')
    .required('Password is required'),
});
